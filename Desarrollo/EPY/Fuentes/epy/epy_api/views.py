from rest_framework import permissions, viewsets, generics, views
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.parsers import MultiPartParser

from .models import Pregunta, User
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
    # parser_classes = [MultiPartParser]
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
    permission_classes = [permissions.AllowAny]

class UsuarioCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsuarioCreateSerializer
    permission_classes = [permissions.AllowAny]

class UsuarioActual(views.APIView):
    def get(self, req):
        serializer = UsuarioSerializer(req.user)
        return Response(serializer.data)

# @api_view(['GET'])
# def obtenerUsuarioActual(req):
#     user = req.user
#     return Response({
#         'username': user.username,
#         'first_name': user.first_name,
#         'last_name': user.last_name,
#         'is_estudiante': user.is_estudiante,
#         'is_profesor': user.is_profesor
#     })