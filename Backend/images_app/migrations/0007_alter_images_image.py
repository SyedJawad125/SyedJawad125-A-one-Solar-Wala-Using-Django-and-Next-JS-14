# Generated by Django 5.1.3 on 2024-12-24 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images_app', '0006_images_bulletsdescription'),
    ]

    operations = [
        migrations.AlterField(
            model_name='images',
            name='image',
            field=models.ImageField(upload_to='solar_images/'),
        ),
    ]
