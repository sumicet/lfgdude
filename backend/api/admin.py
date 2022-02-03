from django.contrib import admin
from .models import User, Lobby, Game
# Register your models here.

admin.site.register(User)
admin.site.register(Lobby)
admin.site.register(Game)
