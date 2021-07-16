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


class UsuarioCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user