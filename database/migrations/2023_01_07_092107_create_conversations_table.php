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
        Schema::create('conversations', function (Blueprint $table) {
            $table->id();
            // sender id
            $table->unsignedBigInteger('sender_id');
            // receiver id
            $table->unsignedBigInteger('receiver_id');
            // message
            // reference on sender id
            $table->foreign('sender_id')->references('id')->on('users');

            // reference on receiver id
            $table->foreign('receiver_id')->references('id')->on('users');

            // timestamp latmessage
            $table->timestamp('last_message_time')->nullable();

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
        Schema::dropIfExists('conversations');
    }
};