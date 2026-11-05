import json

from django.http import JsonResponse
from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from .models import User

@csrf_exempt
def create_user(request):
    data = json.loads(request.body)
    username = data['username']
    password = data['password']
    email = data['email']
    user = User(username=username, email=email)
    user.set_password(password)
    user.save()
    return JsonResponse({'message': 'User created successfully'}, status=201)