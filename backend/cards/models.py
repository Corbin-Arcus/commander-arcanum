from django.db import models

from django.contrib.postgres.fields import ArrayField

class CardFace(models.Model):
    name = models.CharField(max_length=100)
    mana_cost = models.CharField(max_length=50, blank=True)
    type_line = models.CharField(max_length=100, blank=True)
    oracle_text = models.TextField(blank=True)
    power = models.CharField(max_length=10, blank=True)
    toughness = models.CharField(max_length=10, blank=True)
    colors = ArrayField(models.CharField(max_length=1), blank=True, default=list)
    artist = models.CharField(max_length=100, blank=True)
    image_url = models.URLField(blank=True)
    loyality = models.CharField(max_length=10, blank=True)

class Card(models.Model):
    card_faces = ArrayField(models.ForeignKey(CardFace, on_delete=models.CASCADE), blank=True, default=list)
    name = models.CharField(max_length=100)
    release_date = models.DateField(blank=True, null=True)
    image_uri = models.URLField(blank=True)
    mana_cost = models.CharField(max_length=50, blank=True)
    cmc = models.IntegerField(blank=True, null=True)
    type_line = models.CharField(max_length=100, blank=True)
    oracle_text = models.TextField(blank=True)
    power = models.CharField(max_length=10, blank=True)
    toughness = models.CharField(max_length=10, blank=True)
    loyality = models.CharField(max_length=10, blank=True)
    colors = ArrayField(models.CharField(max_length=1), blank=True, default=list)
    color_identity = ArrayField(models.CharField(max_length=1), blank=True, default=list)
    keywords = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    legalities = models.JSONField(blank=True, null=True)
    games = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    reserved = models.BooleanField(default=False)
    game_changer = models.BooleanField(default=False)



