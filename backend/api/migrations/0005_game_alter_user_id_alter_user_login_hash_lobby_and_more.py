# Generated by Django 4.0.1 on 2022-02-03 21:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_user_login_hash_expiration'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.PositiveBigIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=256)),
                ('has_code_join', models.BooleanField(default=False)),
                ('has_ingame_voice', models.BooleanField(default=False)),
            ],
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.CharField(max_length=16, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='login_hash',
            field=models.CharField(db_index=True, max_length=128),
        ),
        migrations.CreateModel(
            name='Lobby',
            fields=[
                ('id', models.PositiveBigIntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('tags', models.CharField(max_length=100)),
                ('use_ingame_voice', models.BooleanField(default=False)),
                ('max_players', models.PositiveIntegerField()),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.game')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user')),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.lobby'),
        ),
    ]
