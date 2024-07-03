# Generated by Django 5.0.6 on 2024-06-24 13:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0006_rename_complete_assignments_completed_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="questions",
            old_name="complete",
            new_name="completed",
        ),
        migrations.AlterField(
            model_name="topics",
            name="module",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="module",
                to="main.module",
            ),
        ),
    ]
