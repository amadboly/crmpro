# Generated by Django 3.1.7 on 2021-03-06 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=15, verbose_name='Company Name')),
                ('compwebadd', models.URLField(max_length=30, verbose_name='Company Web Address')),
                ('title', models.CharField(blank=True, choices=[('Mr', 'Mr'), ('Mss', 'Mss')], default='Mr', max_length=10, null=True, verbose_name='Title')),
                ('fname', models.CharField(blank=True, max_length=10, null=True, verbose_name='First Name')),
                ('lname', models.CharField(blank=True, max_length=10, null=True, verbose_name='Last Name')),
                ('email', models.EmailField(max_length=30, verbose_name='E-mail')),
                ('phone', models.CharField(blank=True, max_length=15, null=True, verbose_name='Phone Number')),
                ('jobtitle', models.CharField(blank=True, max_length=10, null=True, verbose_name='Job Title')),
                ('industry', models.CharField(blank=True, max_length=10, null=True, verbose_name='Industry Sector')),
                ('address', models.CharField(max_length=30, verbose_name='Street Address')),
                ('city', models.CharField(max_length=10, verbose_name='City')),
                ('state', models.CharField(max_length=10, verbose_name='State/Proviance')),
                ('country', models.CharField(max_length=10, verbose_name='Country')),
                ('postcode', models.CharField(max_length=10, verbose_name='Postal Code')),
            ],
        ),
    ]
