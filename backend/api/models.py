from django.db import models


# Create your models here.
class User(models.Model):
    id = models.CharField(max_length=16, unique=True, primary_key=True, db_index=True)
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

    login_hash = models.CharField(max_length=128)
    login_hash_expiration = models.DateTimeField()

    def __str__(self):
        return f"{self.username}#{self.discriminator} - id: {self.id} - expires: {self.login_hash_expiration}"
