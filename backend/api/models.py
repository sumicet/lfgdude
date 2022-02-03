from django.db import models


# Create your models here.
class Game(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    name = models.CharField(max_length=256)
    has_code_join = models.BooleanField(default=False)
    has_ingame_voice = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.id}: {self.name} - Uses group code: {self.has_code_join} - Ingame voice: {self.has_ingame_voice}"


class User(models.Model):
    id = models.CharField(max_length=16, primary_key=True)
    username = models.CharField(max_length=32)
    discriminator = models.IntegerField()
    avatar_hash = models.CharField(max_length=32)
    banner_hash = models.CharField(max_length=32)
    banner_color = models.CharField(max_length=8)
    accent_color = models.IntegerField()

    access_token = models.CharField(max_length=64)
    refresh_token = models.CharField(max_length=64)
    token_type = models.CharField(max_length=32)
    token_expiration = models.DateTimeField()

    login_hash = models.CharField(max_length=128, db_index=True)
    login_hash_expiration = models.DateTimeField()

    group = models.ForeignKey("Lobby", on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.username}#{self.discriminator} - id: {self.id} - expires: {self.login_hash_expiration}"


class Lobby(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.CharField(max_length=100)
    use_ingame_voice = models.BooleanField(default=False)

    max_players = models.PositiveIntegerField()
