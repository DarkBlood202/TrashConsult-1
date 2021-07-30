from rest_framework import serializers

from .models import Pregunta, User, Estudiante, Profesor, ArchivoPregunta, Sesion, Mensaje

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

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'is_estudiante', 'is_profesor']

class TipoUsuarioSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField()
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']

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

class EstudianteSerializer(serializers.ModelSerializer):
    usuario = TipoUsuarioSerializer()
    class Meta:
        model = Estudiante
        fields = '__all__'

class ProfesorSerializer(serializers.ModelSerializer):
    usuario = TipoUsuarioSerializer()
    class Meta:
        model = Profesor
        fields = '__all__'

class PreguntaSerializer(serializers.ModelSerializer):
    # autor = serializers.ReadOnlyField(source='autor.username')
    autor = UsuarioSerializer()
    # marcadores = MarcadorSerializer(many=True)

    class Meta:
        model = Pregunta
        fields = '__all__'

class SesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sesion
        fields = '__all__'

class MensajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mensaje
        fields = '__all__'