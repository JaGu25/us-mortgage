<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Babe Correo</title>
</head>
<body>
    <p>Ha llegado un correo de la siguiente persona:</p>
    <p>Nombre y Apellidos: {{ $correo->nombre }}.</p>
    <p>Email: {{ $correo->email }}.</p>
    <p>Dirección: {{ $correo->direccion }}.</p>
    <p>Motivo: {{ $correo->motivo }}.</p>
    <p>Mensaje: {{ $correo->mensaje }}.</p>
    <p>Consiento el tratamiento de datos de carácter personal aquí descrito : {{ $correo->consentimiento }}.</p>
    <p>Me gustaría recibir información y nuevas promociones sobre productos BABÉ : {{ $correo->informacion }}.</p>
</body>
</html>