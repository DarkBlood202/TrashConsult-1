from rest_framework import permissions, viewsets, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from django.contrib.auth.models import User

from .models import Pregunta
from .serializers import PreguntaSerializer, UsuarioSerializer, UsuarioCreateSerializer
from .permissions import IsAuthorOrReadOnly

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'usuarios': reverse('lista-usuarios', request=request, format=format),
        'preguntas': reverse('lista-preguntas', request=request, format=format)
    })

# Create your views here.
class PreguntaViewSet(viewsets.ModelViewSet):
    """
    El ViewSet provee vista de lista y detalle, operaciones CUD.
    """
    queryset = Pregunta.objects.all()
    serializer_class = PreguntaSerializer
    permission_classes = [
        permissions.IsAuthenticated,
        IsAuthorOrReadOnly
    ]

    def perform_create(self, serializer):
        serializer.save(autor=self.request.user)


class UsuarioViewSet(viewsets.ReadOnlyModelViewSet):
    """
    El ViewSet provee vista de lista y de detalle.
    """
    queryset = User.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated]


class UsuarioCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsuarioCreateSerializer
    permission_classes = [permissions.AllowAny]