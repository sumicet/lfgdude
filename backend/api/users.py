import requests
import json
import os
import secrets

from datetime import timedelta
from django.utils import timezone
from django.core.exceptions import SuspiciousOperation
from typing import Dict

from .models import User

DISCORD_USER_ENDPOINT = '{}/users/@me'.format(os.getenv('DISCORD_API_URL'))


def fetch_user_data(access_token, token_type):
    user_data = requests.get(DISCORD_USER_ENDPOINT, headers={'Authorization': f'{token_type} {access_token}', 'User-Agent': 'LFGDude ($url.com, $v0.1)'})
    try:
        user_data.raise_for_status()
    except Exception as e:
        raise SuspiciousOperation(e)

    return json.loads(user_data.content)


def add_user(token_data: Dict):
    user_data: Dict = fetch_user_data(token_data['access_token'], token_data['token_type'])

    encoded_id = encode_user_id(user_data['id'])
    user, _ = User.objects.update_or_create(
        id=encoded_id,
        defaults={
            'id': encoded_id,
            'username': user_data['username'],
            'discriminator': int(user_data['discriminator']),
            'avatar_hash': user_data.get('avatar', ''),
            'banner_color': user_data.get('banner_color', '#000000'),
            'accent_color': int(user_data.get('accent_color', 0)),

            'access_token': token_data['access_token'],
            'refresh_token': token_data['refresh_token'],
            'token_type': token_data['token_type'],
            'token_expiration': timezone.now() + timedelta(seconds=int(token_data['expires_in']) - 60),

            'login_hash': secrets.token_urlsafe(),
            'login_hash_expiration': timezone.now() + timedelta(days=30)
        }
    )

    user.save()

    return user.login_hash


def encode_user_id(id: str):
    return hex(int(id))[2:]


def decode_user_id(id: str):
    return int(id, 16)