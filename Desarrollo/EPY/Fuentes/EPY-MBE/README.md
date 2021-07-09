# EPY - MBE
Back end del sistema Edupy

## Requisitos
+ Intérprete Python 3.9

## Dependencias
+ Django framework web
+ Django REST framework

## Instrucciones
1. En su entorno Python3, instale las dependencias vía pip (o conda) desde el archivo *requirements* en el directorio raíz.
~~~
python -m pip install -r requirements.txt
~~~

2. Realice las migraciones de la base de datos.
~~~
python manage.py makemigrations
python manage.py migrate
~~~

3. Adicionalmente, puede crear un super usuario para acceder a la interfaz de *Django admin*, esta le permitirá crear objetos en la base de datos de forma manual.
~~~
python manage.py createsuperuser
~~~

4. Correr el servidor (por defecto en el puerto 8000)
~~~
python manage.py runserver
~~~

## Puntos de ruta
Los puntos de ruta a continuación asumen que el servidor se encuentra en el puerto 8000.

### API
~~~
localhost:8000/api/
~~~