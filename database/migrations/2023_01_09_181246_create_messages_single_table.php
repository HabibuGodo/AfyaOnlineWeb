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
        Schema::create('messages_single', function (Blueprint $table) {
            $table->id();
            // conversation id
            $table->unsignedBigInteger('conversation_id');
            // sender id
            $table->unsignedBigInteger('sender_id');
            // receiver id
            $table->unsignedBigInteger('receiver_id');
            // message
            $table->text('message')->nullable();
            // reference on conversation id
            $table->foreign('conversation_id')->references('id')->on('conversations');
            // reference on sender id
            $table->foreign('sender_id')->references('id')->on('users');
            // reference on receiver id
            $table->foreign('receiver_id')->references('id')->on('users');
            // boolean reead
            $table->boolean('sender_read')->default(1)->nullable();

            $table->boolean('receiver_read')->default(0)->nullable();

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
        Schema::dropIfExists('messages_single');
    }
};