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
        'business_name',
        'business_code',
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'password'
    ];

    protected $hidden = [
        'password',
    ];

}
