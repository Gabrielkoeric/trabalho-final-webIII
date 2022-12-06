<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Carro;
use Illuminate\Http\Request;

class CarroController extends Controller
{
    public function index(Request $request)
    {
        $query = Carro::query();
        if ($request->has('id')){
            $query->where('id', $request->id);
        }
        return $query->paginate(20);
    }

    public function store(Request $request){
        return response()->json(Carro::create($request->all()), 201);
    }

    public function show(Carro $carro){
        return $carro;
    }

    public function update(Carro $carro, Request $request){
        $carro->fill($request->all());
        $carro->save();
        return $carro;
    }

    public function destroy(int $carro){
        Carro::destroy($carro);
    }
}
