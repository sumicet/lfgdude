# Generated by Django 4.0.1 on 2022-02-03 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_user_group'),
    ]

    operations = [
        migrations.AddField(
            model_name='lobby',
            name='code',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
