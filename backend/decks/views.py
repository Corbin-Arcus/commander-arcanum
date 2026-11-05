from django.core.serializers import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .models import Deck

@require_http_methods(["GET"])
def index(request):
    decks = Deck.objects.all()
    data = [{'id': deck.id, 'name': deck.name, 'description': deck.description} for deck in decks]
    return JsonResponse(data, safe=False)

@require_http_methods(["POST"])
def create_deck(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data['name']
        description = data['description']
        deck = Deck(name=name, description=description)
        deck.save()
        return JsonResponse({'message': 'Deck created successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)