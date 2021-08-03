# Generated by Django 3.1.5 on 2021-08-03 11:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('spots', '0003_auto_20210517_0033'),
    ]

    operations = [
        migrations.AddField(
            model_name='spot',
            name='followers',
            field=models.ManyToManyField(blank=True, related_name='following_spots', to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='SpotFollowerRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('spot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='spots.spot')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]