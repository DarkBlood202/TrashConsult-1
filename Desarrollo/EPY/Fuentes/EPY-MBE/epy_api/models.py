from django.db import models

# Create your models here.
class Pregunta(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    titulo = models.CharField(max_length=64)
    descripcion = models.TextField()
    editada = models.BooleanField(default=False)
    autor = models.ForeignKey('auth.User', related_name='preguntas', on_delete=models.CASCADE)