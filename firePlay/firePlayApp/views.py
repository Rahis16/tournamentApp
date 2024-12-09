from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def tournament(request):
    return render(request, 'tournament.html')

def walet(request):
    return render(request, 'walet.html')

def notification(request):
    return render(request, 'notification.html')

def topPlayers(request):
    return render(request, 'top-players.html')

def creators(request):
    return render(request, 'creators.html')

