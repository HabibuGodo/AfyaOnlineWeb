<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Seed the Roles here
        Role::create([
            'role_no' => 1,
            'role_name' => 'Admin',
        ]);
        Role::create([
            'role_no' => 2,
            'role_name' => 'Normal',
        ]);


        // Seed Admin here
        User::create([
            'name' => 'Admin',
            'gender' => 'Male',
            'email' => 'admin@gmail.com',
            'phone' => '0700000000',
            'mrn' => 'mrn/123/2022',
            'profile_image' => 'avatar.png',
            'status' => 'SuperAdmin',
            'role_id' => 1,
            'password' => Hash::make('12345678'),
        ]);

        // Seed Admin here
        User::create([
            'name' => 'Ally Bitebo',
            'gender' => 'Male',
            'email' => 'admin2@gmail.com',
            'phone' => '0713900939',
            'mrn' => 'mrn/124/2022',
            'profile_image' => 'avatar.png',
            'status' => 'SuperAdmin',
            'role_id' => 1,
            'password' => Hash::make('12345678'),
        ]);
    }
}