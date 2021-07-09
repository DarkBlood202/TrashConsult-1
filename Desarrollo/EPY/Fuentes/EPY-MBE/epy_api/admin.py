from django.contrib import admin

from .models import Pregunta

# Register your models here.
@admin.register(Pregunta)
class PreguntaAdmin(admin.ModelAdmin):
    ordering = ['fecha']
    list_display_links = ('titulo','autor')
    list_display = ('titulo','autor')

    list_filter = ('titulo', 'fecha', 'autor')
    search_fields = ['titulo', 'autor']