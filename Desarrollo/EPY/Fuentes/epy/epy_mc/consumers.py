import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from channels.layers import get_channel_layer

from epy_api.serializers import SesionSerializer, MensajeSerializer
from epy_api.models import Sesion, Mensaje

class ChatConsumer(AsyncWebsocketConsumer):

    @database_sync_to_async
    def obtener_sesion(self, key):
        return Sesion.objects.get(id_key=key)

    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)

        message = text_data_json['message']
        
        # autor = text_data_json['autor']
        # contenido = text_data_json['contenido']
        # sesion = text_data_json['sesion']

        # Send to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                # 'autor': autor,
                # 'contenido': contenido,
                # 'sesion': sesion,
                'message': message
            }
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']

        # Send to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))

    # Recibir mensaje
    async def obtener_mensaje(self, event):
        autor = self.scope['user']
        contenido = event['contenido']
        sesion = self.obtener_sesion(key=self.room_group_name)

        await self.send(text_data=json.dumps({
            'autor': autor,
            'contenido': contenido,
            'sesion': sesion
        }))
        
