# Generated by Django 4.0.5 on 2023-02-20 06:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('placementStories', '0002_story_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='Text',
            field=models.TextField(max_length=5000),
        ),
        migrations.CreateModel(
            name='question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Text', models.TextField(max_length=200)),
                ('story', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='placementStories.story')),
            ],
        ),
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Text', models.TextField(max_length=2000)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='placementStories.question')),
            ],
        ),
    ]