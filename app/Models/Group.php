<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    protected $table = "groups";

    protected $fillable = [
        'group_name',
        'profile_image',
        'status'
    ];

    public function members()
    {
        return $this->hasMany(GroupMember::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    //get active members
    public function activeMembers()
    {
        return $this->hasMany(GroupMember::class)->where('status', "active");
    }

    public function countActiveMembers()
    {
        return $this->members()->where('status', 'active')->count();
    }
}