# Generated by Django 4.1.2 on 2022-11-21 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hello', '0004_auto_20221109_1139'),
    ]

    operations = [
        migrations.AlterField(
            model_name='highfivelog',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
