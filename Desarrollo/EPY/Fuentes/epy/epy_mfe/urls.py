from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('registro', views.index),
    path('perfil', views.index),
    path('inicio', views.index),
    path('sobre-nosotros', views.index),
    path('mis-preguntas', views.index),
    path('ayuda', views.index),
    path('editar-perfil', views.index),
    path('chat', views.index),
    path('busqueda', views.index)
]