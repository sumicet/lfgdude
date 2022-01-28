from django.urls import path, include
from . import views

app_name = 'api'
urlpatterns = [
    path('discord_auth', views.discord_auth, name='discord_auth')
]
