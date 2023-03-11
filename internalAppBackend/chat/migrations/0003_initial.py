# Generated by Django 4.1.6 on 2023-03-03 03:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0003_alter_profile_tagline'),
        ('chat', '0002_delete_message'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(max_length=10000)),
                ('created_time', models.DateTimeField(auto_now_add=True)),
                ('reciever', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recievers', to='users.profile')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='senders', to='users.profile')),
            ],
        ),
    ]