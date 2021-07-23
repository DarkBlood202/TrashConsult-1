from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    is_estudiante = models.BooleanField(default=False)
    is_profesor = models.BooleanField(default=False)

class Pregunta(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    titulo = models.CharField(max_length=64)
    descripcion = models.TextField()
    editada = models.BooleanField(default=False)
    autor = models.ForeignKey(User, related_name='preguntas_publicadas', on_delete=models.CASCADE)
    # marcadores = models.ManyToManyField(User, related_name='preguntas_marcadas', blank=True)

    class Meta:
        ordering = ['-fecha']

class ArchivoPregunta(models.Model):
    archivo = models.FileField(upload_to='archivos')
    pregunta = models.ForeignKey(Pregunta, on_delete=models.CASCADE, related_name='archivos')

class Estudiante(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    valoracion = models.FloatField(default=0)

class Profesor(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    tarifa = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    valoracion = models.FloatField(default=0)
