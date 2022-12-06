<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cor;
use Illuminate\Http\Request;

class CorController extends Controller
{
    public function index(Request $request)
    {
        $query = Cor::query();
        if ($request->has('cores_nome')){
            $query->where('cores_nome', $request->cores_nome);
        }
        return $query->paginate(20);
    }

    public function store(Request $request){
       return response()->json(Cor::create($request->all()), 201);
    }

    public function show(Cor $cor){
        return $cor;
    }

    public function update(Cor $cor, Request $request){
        $cor->fill($request->all());
        $cor->save();
        return $cor;
    }

    public function destroy(int $cor){
        Cor::destroy($cor);
    }
}
