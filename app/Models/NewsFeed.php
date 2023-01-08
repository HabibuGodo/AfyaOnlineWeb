<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsFeed extends Model
{
    use HasFactory;
    protected $table = 'news_feeds';

    public $timestamps = false;

    protected $fillable = [
        'title',
        'description',
        'user_id',
        'image'
    ];

    //user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}