<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password as RulesPassword;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|min:3',
            'email' => 'required|email|string|unique:users,email',
            'password' => [
                'required',
                'confirmed', 
                RulesPassword::defaults()
                // Password::min(8)->mixedCase()->numbers()->symbols()
            ]
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
        ]);

        $token = $user->createToken('SP-Geradores')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $resquest)
    {
        $credential = $resquest->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => [ 'required' ],
            'remember' => 'boolean'
        ]);

        $remember = $credential['remember'] ?? false;
        unset($credential['remember']);

        if(!Auth::attempt($credential, $remember)){
            return response([
                'errors' => 'Usuário e/ou senha inválido(s)'
            ],422);
        }

        $user = Auth::user();
        $token = $user->createToken('SP-Geradores')->plainTextToken;
        
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response([ 'success' => true ] );
    }
}
