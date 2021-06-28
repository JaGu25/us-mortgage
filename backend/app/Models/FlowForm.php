<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlowForm extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'business_own',
        'money_need',
        'finance_for',
        'month_start',
        'yeart_start',
        'annual_revenue',
        'residential_loans',
        'home_description',
        'property_use',
        'plan_to_purchase',
        'first_time_buyer',
        'credit_profile',
        'currently_employed',
        'business_name',
        'business_code',
        'full_name',
        'email',
        'phone_number',
        'estimated_value_property',
        'estimated_purchase_price',
        'down_payment',
        'want_to_refinance',
        'morgate_balance',
        'additional_cash',
        'password'
    ];

    protected $hidden = [
        'password',
    ];

}
