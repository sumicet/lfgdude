import json
import os
import requests
import secrets

from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpRequest, HttpResponse
from django.core.exceptions import PermissionDenied, SuspiciousOperation

from .users import add_user

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
