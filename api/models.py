from django.db import models

# Create your models here.

class Wine(models.Model):
    json = models.CharField(max_length=2000)

    def __str__(self):
        return self.json

