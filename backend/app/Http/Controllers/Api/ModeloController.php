<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Modelo;
use Illuminate\Http\Request;

class ModeloController extends Controller
{
    public function index(Request $request)
    {
        $query = Modelo::query();
        if ($request->has('modelos_nome')){
            $query->where('modelos_nome', $request->modelos_nome);
        }
        return $query->paginate(20);
    }

    public function store(Request $request){
        return response()->json(Modelo::create($request->all()), 201);
    }

    public function show(Modelo $modelo){
        return $modelo;
    }

    public function update(Modelo $modelo, Request $request){
        $modelo->fill($request->all());
        $modelo->save();
        return $modelo;
    }

    public function destroy(int $modelo){
        Modelo::destroy($modelo);
    }
}
