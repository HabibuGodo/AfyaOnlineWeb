<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    //Login users here
    public function authenticate(Request $request)
    {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $check = User::where('email', $request->email)->first();

        if ($check && Hash::check(request('password'), $check->password)) {
            Auth::login($check);
            // session put
            request()->session()->put('user',$check);
            return redirect('/all_users');
        } else {
            session()->flash('error', 'Wrong email or password');

            return redirect('/login');
        }

        session()->flash('error', 'Wrong email or password');
        redirect('/login');
    }


    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
