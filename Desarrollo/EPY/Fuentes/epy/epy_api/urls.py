from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('preguntas', views.PreguntaViewSet)
router.register('usuarios', views.UsuarioViewSet)

urlpatterns = [
    path('', include(router.urls)),

    path('registro/', views.UsuarioCreate.as_view()),
    path('obtener-usuario/', views.UsuarioActual.as_view()),
]