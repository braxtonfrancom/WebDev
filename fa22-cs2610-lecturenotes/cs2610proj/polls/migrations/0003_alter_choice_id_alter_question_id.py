# Generated by Django 4.1.1 on 2022-10-07 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_populate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choice',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='question',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]