import json
import os
import requests
import secrets

from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpRequest, HttpResponse
from django.core.exceptions import PermissionDenied, SuspiciousOperation
from django.core import serializers

from .users import add_user
from .models import Game, Lobby, User

DISCORD_TOKEN_URL = os.getenv('DISCORD_TOKEN_URL')
DISCORD_REDIRECT_URI = os.getenv('DISCORD_REDIRECT_URI')


def index(request):
    return HttpResponse("This is LFGDude backend API")


def discord_auth(request: HttpRequest):
    if request.method != 'POST':
        raise PermissionDenied

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if not isinstance(body, str) or 'code=' not in body:
        raise SuspiciousOperation

    code = body.replace('code=', '').strip()
    app_id = os.getenv('APP_ID')
    app_secret = os.getenv('APP_SECRET')

    data = {
        'client_id': app_id,
        'client_secret': app_secret,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': DISCORD_REDIRECT_URI,
        'scope': 'identify'
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    r = requests.post(DISCORD_TOKEN_URL, data=data, headers=headers)

    try:
        r.raise_for_status()
    except Exception as e:
        raise SuspiciousOperation

    token_data = json.loads(r.content)
    login_hash = add_user(token_data)

    return HttpResponse(content=json.dumps({'token': login_hash}))


def get_lobbies(request: HttpRequest):
    if request.method != "GET":
        raise PermissionDenied

    game_id = -1
    if 'game_id' in request.GET:
        try:
            game_id = int(request.GET['game_id'])
        except ValueError as e:
            raise SuspiciousOperation

    lobbies = Lobby.objects.all() if game_id == -1 else Lobby.objects.filter(id=game_id)
    data = [
        {
            'id': x.id,
            'title': x.title,
            'owner': x.owner.username,
            'tags': [tag for tag in x.tags.split(' ')],
            'players': {
                'max': x.max_players,
                'list': [user.username for user in User.objects.filter(group=x)]
            },
            'game': {
                'id': x.game.id,
                'name': x.game.name,
                'code': x.code if x.game.has_code_join else ''
            },
            'vc': {
                'use_ingame': x.use_ingame_voice and x.game.has_ingame_voice
            }
        }
        for x in lobbies
    ]

    for entry in data:
        if entry['game']['code'] == '':
            del entry['game']['code']

    return HttpResponse(json.dumps(data))
