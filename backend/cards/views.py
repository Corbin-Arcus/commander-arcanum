from django.shortcuts import render

from django.core.serializers import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .models import Card

@require_http_methods(["GET"])
def index(request):
    cards = Card.objects.all()
    data = [{'id': card.id, 'name': card.name, 'description': card.description} for card in cards]
    return JsonResponse(data, safe=False)
