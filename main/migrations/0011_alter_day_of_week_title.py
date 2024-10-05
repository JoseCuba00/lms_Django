# Generated by Django 5.1 on 2024-10-01 12:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0010_alter_day_of_week_title"),
    ]

    operations = [
        migrations.AlterField(
            model_name="day_of_week",
            name="title",
            field=models.CharField(
                choices=[
                    ("Monday", "Monday"),
                    ("Tuesday", "Tuesday"),
                    ("Wednesday", "Wednesday"),
                    ("Thursday", "Thursday"),
                    ("Friday", "Friday"),
                    ("Saturday", "Saturday"),
                    ("Sunday", "Sunday"),
                ],
                max_length=10,
            ),
        ),
    ]
