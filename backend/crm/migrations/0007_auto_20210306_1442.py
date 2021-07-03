# Generated by Django 3.1.7 on 2021-03-06 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0006_auto_20210306_1438'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='source',
            field=models.CharField(choices=[('Web', 'Web'), ('marketing', 'Marketing Campain'), ('customer request', 'Customer Request')], default='Web', max_length=100, verbose_name='Lead Source'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='status',
            field=models.CharField(choices=[('Open', 'Open'), ('Contacted', 'Contacted'), ('Dropped', 'Dropped'), ('Qutation submitted', 'Qutation submitted'), ('Pending', 'Pending'), ('Win', 'Win'), ('Lost', 'Lost')], default='Open', max_length=100, verbose_name='Status'),
        ),
    ]
