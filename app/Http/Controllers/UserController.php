<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //get all users
    public function allUsers()
    {
        //All users except loq
        $users = User::where('id', '!=', Auth::user()->id)->get();
        return view('dashboard.pages.users', compact('users'));
    }

    //delete user

    public function deleteUser($id){
        $user = User::find($id);
        $user->delete();
        return redirect()->back()->with('success', 'User deleted successfully');
    }

    //go to add user page
    public function gotoAddUserPage(){
        //roles
        $roles = Role::all();
        return view('dashboard.pages.new_user',
        compact('roles'));
    }

    //add user
    public function addUser(Request $request){
        $request->validate([
            'name' => 'required',
            'mrn' => 'required|unique:users',
            'phone' => 'required|unique:users|max:10|min:10',
            'email' => 'required|unique:users',
            'gender' => 'required',
            'role' => 'required',
        ]);

     

        $user = new User();
        $user->name = $request->name;
        $user->mrn = $request->mrn;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->gender = $request->gender;
        $user->password = Hash::make($request->phone);
        $user->role_id = $request->role;
        $user->status = 'active';

        $user->save();

        return redirect()->back()->with('success', 'User added successfully');


    }

}
