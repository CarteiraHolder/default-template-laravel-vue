<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clients;

class ClientsController extends Controller
{   
    public function index(){
        $Clients = Clients::orderBy('corporateName')->get();
        return response()->json($Clients,200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'cnpj' => 'required|cnpj|max:14|unique:clients,cnpj',
            'corporateName' => 'required|min:3',
            'email' => 'required|email|max:128',
        ]);
        $Clients = Clients::create($request->all());

        return response()->json($Clients,200);
    }


    public function show($id)
    {
        $Clients = Clients::find($id);
        return response()->json($Clients,200);
    }

     public function getBySearch(Request $request)
    {
        $Request = $request->all();
        $Search = $Request['Search'];
        $Clients = Clients::select("*")
            ->where('corporateName', 'ilike', '%' . $Search . '%')
            ->orWhere('fantasyName', 'ilike', '%' . $Search . '%')
            ->orWhere('email', 'ilike', '%' . $Search . '%')
            ->orWhere('city', 'ilike', '%' . $Search . '%')
            ->orWhere('state', 'ilike', '%' . $Search . '%')
            ->orWhere('district', 'ilike', '%' . $Search . '%')
            ->orWhere('address', 'ilike', '%' . $Search . '%')
            ->orWhere('cnpj', 'ilike', '%' . $Search . '%')
            ->orderBy('corporateName');

        return response()->json($Clients->get(),200);
    }



    public function update(Request $request, $id)
    {
        $Clients = Clients::find($id);
        if($Clients === null) return response()->json(['msg'=>'Essa empresa não foi encontrada.'],404);

        //Não é possivel editar o CNPJ
        $request->validate([
            'corporateName' => 'required|min:3',
            'email' => 'required|email|max:128',
        ]);

        $Clients->update($request->all());

        return response()->json($Clients,200);
    }

    public function destroy($id)
    {
        $Clients = Clients::find($id);
        if($Clients === null) return response()->json(['msg'=>'Esse cliente não foi encontrado.'],404);

        $Clients->delete();

        return response()->json(['msg' => 'Esse cliente foi excluído com sucesso'],200);
    }
}
