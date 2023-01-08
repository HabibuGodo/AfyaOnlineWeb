<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            //group id
            $table->unsignedBigInteger('group_id')->nullable();
            // sender id
            $table->unsignedBigInteger('sender_id');
            // receiver id
            $table->longText('receiver_id')->nullable();
            // message
            $table->text('message')->nullable();
            // reference on group id
            $table->foreign('group_id')->references('id')->on('groups');
            // reference on sender id
            $table->foreign('sender_id')->references('id')->on('users');
            // boolean reead
            $table->boolean('sender_read')->default(1)->nullable();

            $table->longText('receiver_read')->nullable();

            $table->string('status')->default('active');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
};