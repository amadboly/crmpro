# Generated by Django 3.1.7 on 2021-04-23 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0012_auto_20210423_1739'),
    ]

    operations = [
        migrations.AlterField(
            model_name='marketing',
            name='createddate',
            field=models.DateField(verbose_name='Date Created'),
        ),
    ]
