# Generated by Django 3.1.7 on 2021-03-06 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0002_auto_20210306_1217'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='postcode',
            field=models.CharField(max_length=10, verbose_name='Post Code'),
        ),
    ]
