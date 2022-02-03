from django.urls import path, include
from . import views

app_name = 'api'
urlpatterns = [
    path('', views.index, name='index'),
    path('discord_auth', views.discord_auth, name='discord_auth'),
    path('get_lobbies', views.get_lobbies, name='get_lobbies')
]
