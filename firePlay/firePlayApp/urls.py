from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('tournament/', views.tournament, name="tournament"),
    path('walet/', views.walet, name="walet"),
    path('notification/', views.notification, name="notification"),
    path('top-players/', views.topPlayers, name="topPlayers"),
    path('creators/', views.creators, name="creators"),
]