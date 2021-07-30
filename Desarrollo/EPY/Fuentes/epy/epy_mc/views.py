from django.shortcuts import render

# Create your views here.
def index(req):
    return render(req, 'epy_mc/index.html')

def room(req, room_name):
    return render(req, 'epy_mc/room.html', {
        'room_name': room_name
    })