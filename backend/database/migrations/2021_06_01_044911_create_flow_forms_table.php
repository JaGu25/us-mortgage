<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateFlowFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flow_forms', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('business_own')->nullable();
            $table->string('money_need')->nullable();
            $table->string('finance_for')->nullable();
            $table->string('month_start')->nullable();
            $table->string('yeart_start')->nullable();
            $table->string('annual_revenue')->nullable();
            $table->string('residential_loans')->nullable();
            $table->string('home_description')->nullable();
            $table->string('property_use')->nullable();
            $table->string('plan_to_purchase')->nullable();
            $table->string('first_time_buyer')->nullable();
            $table->string('credit_profile')->nullable();
            $table->string('currently_employed')->nullable();
            $table->string('business_name')->nullable();
            $table->string('business_code')->nullable();
            $table->string('full_name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('estimated_value_property')->nullable();
            $table->string('estimated_purchase_price')->nullable();
            $table->string('down_payment')->nullable();
            $table->string('want_to_refinance')->nullable();
            $table->string('morgate_balance')->nullable();
            $table->string('additional_cash')->nullable();
            $table->string('password')->nullable();
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
        Schema::dropIfExists('flow_forms');
    }
}
