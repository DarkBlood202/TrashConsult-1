from django.contrib import admin

from .models import Pregunta, Estudiante, Profesor

# Register your models here.
@admin.register(Pregunta)
class PreguntaAdmin(admin.ModelAdmin):
    ordering = ['fecha']
    list_display_links = ('titulo','autor')
    list_display = ('titulo','autor')

    list_filter = ('titulo', 'fecha', 'autor')
    search_fields = ['titulo', 'autor']

@admin.register(Estudiante)
class EstudianteAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'valoracion')

@admin.register(Profesor)
class ProfesorAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'valoracion')