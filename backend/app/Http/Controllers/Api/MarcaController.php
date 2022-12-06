<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Marcas;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    public function index(Request $request)
    {
        $query = Marcas::query();
        if ($request->has('marcas_nome')){
            $query->where('marcas_nome', $request->marcas_nome);
        }
        return $query->paginate(20);
    }

    public function store(Request $request){
        return response()->json(Marcas::create($request->all()), 201);
    }

    public function show(Marcas $marca){
        return $marca;
    }

    public function update(Marcas $marca, Request $request){
        $marca->fill($request->all());
        $marca->save();
        return $marca;
    }

    public function destroy(int $marca){
        Marcas::destroy($marca);
    }
}
