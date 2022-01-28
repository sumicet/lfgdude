# Generated by Django 4.0.1 on 2022-01-28 20:34

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='login_hash_expiration',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 27, 20, 34, 45, 968739, tzinfo=utc)),
        ),
        migrations.DeleteModel(
            name='Choice',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
    ]
