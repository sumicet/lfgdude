from django.urls import path, include
from . import views

app_name = 'api'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_id>', views.detail, name='detail'),
    path('discord_auth', views.discord_auth, name='auth')
]
