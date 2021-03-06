# Generated by Django 4.0.1 on 2022-01-28 20:29

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.CharField(db_index=True, max_length=16, primary_key=True, serialize=False, unique=True)),
                ('username', models.CharField(max_length=32)),
                ('discriminator', models.IntegerField()),
                ('avatar_hash', models.CharField(max_length=32)),
                ('banner_hash', models.CharField(max_length=32)),
                ('banner_color', models.CharField(max_length=8)),
                ('accent_color', models.IntegerField()),
                ('access_token', models.CharField(max_length=64)),
                ('refresh_token', models.CharField(max_length=64)),
                ('token_type', models.CharField(max_length=32)),
                ('token_expiration', models.DateTimeField()),
                ('login_hash', models.CharField(max_length=128)),
                ('login_hash_expiration', models.DateTimeField(default=datetime.datetime(2022, 2, 27, 20, 29, 28, 686809, tzinfo=utc))),
            ],
        ),
    ]
