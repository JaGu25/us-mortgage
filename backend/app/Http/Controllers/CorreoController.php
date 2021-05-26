<?php

namespace App\Http\Controllers;

use App\Mail\BabeEnvioCorreo;
use App\Models\Correo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CorreoController extends Controller
{
    public function enviarCorreo(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'telefono' => 'nullable',
            'email' => 'required',
            'direccion' => 'required',
            'motivo' => 'required',
            'mensaje' => 'required',
            'consentimiento' => 'required',
            'informacion' => 'required'
        ]);

        $correo = new Correo([
            'nombre' => $request->get('nombre'),
            'telefono' => '-------',
            'email' => $request->get('email'),
            'direccion' => $request->get('nombre'),
            'motivo' => $request->get('motivo'),
            'mensaje' => $request->get('mensaje'),
            'consentimiento' => $request->get('consentimiento'),
            'informacion' => $request->get('informacion'),
        ]);

        $enviar = ["vanesa.velasquez@rfpharmacare.com","contacto@laboratoriosbabe.pe"];

        $correo->save();

        Mail::to($enviar)->send(new BabeEnvioCorreo($correo));

        return response()->json(['message' => 'Correo Enviado'], 200);
    }
}
