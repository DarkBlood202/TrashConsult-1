from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Pregunta

class PreguntaSerializer(serializers.HyperlinkedModelSerializer):
    autor = serializers.ReadOnlyField(source='autor.username')

    class Meta:
        model = Pregunta
        fields = '__all__'


class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    preguntas = serializers.HyperlinkedRelatedField(
        many=True,
        view_name='pregunta-detalle',
        read_only=True
    )

    class Meta:
        model = User
        fields = ['id', 'username', 'preguntas']