from rest_framework import serializers

from .models import Pregunta, User, Estudiante, Profesor, ArchivoPregunta

class MarcadorSerializer(serializers.ModelSerializer):
    # marcador_username = serializers.ReadOnlyField(source='User.username')

    class Meta:
        model = User
        # fields = ['marcador_username']
        fields = ['username']

class ArchivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArchivoPregunta
        fields = ['archivo']

class PreguntaSerializer(serializers.HyperlinkedModelSerializer):
    autor = serializers.ReadOnlyField(source='autor.username')
    # marcadores = MarcadorSerializer(many=True)

    class Meta:
        model = Pregunta
        fields = '__all__'

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    # preguntas = serializers.HyperlinkedRelatedField(
    #     many=True,
    #     view_name='pregunta-detalle',
    #     read_only=True
    # )

    class Meta:
        model = User
        # fields = ['id', 'username', 'preguntas']
        fields = ['id', 'username', 'first_name', 'last_name', 'is_estudiante', 'is_profesor']

class UsuarioCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'username',
            'password',
            'is_estudiante',
            'is_profesor'
        ]
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

        if validated_data.pop('is_estudiante'):
            estudiante = Estudiante.objects.create(usuario=user)
            estudiante.save()
        elif validated_data.pop('is_profesor'):
            profesor = Profesor.objects.create(usuario=user)
            profesor.save()

        return user