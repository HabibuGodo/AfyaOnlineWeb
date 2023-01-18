<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = "users";


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'gender',
        'phone',
        'profile_image',
        'status',
        'role_id',
        'firebaseToken',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    //group
    public function groups()
    {
        return $this->belongsToMany(Group::class);
    }

    // reciver
    public function conversationsReciver()
    {
        return $this->hasMany(Conversation::class, 'receiver_id');
    }

    // sender
    public function conversationsSender()
    {
        return $this->hasMany(Conversation::class, 'sender_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}