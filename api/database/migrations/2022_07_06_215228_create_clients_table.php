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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('cnpj',14);
            $table->text('corporateName');
            $table->text('fantasyName')->nullable();
            $table->string('email',128);
            $table->float('phone',8,2)->nullable();
            $table->integer('cep')->nullable();
            $table->text('address')->nullable();
            $table->integer('number')->nullable();
            $table->text('district')->nullable();
            $table->string('state',2)->nullable();
            $table->text('city')->nullable();
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
        Schema::dropIfExists('clients');
    }
};
