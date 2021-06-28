<?php

namespace App\Http\Controllers;

use App\Enums\FlowTypes;
use App\Models\FlowForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Exports\FormExport;
use App\Mail\MortgageMail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

class FlowFormController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['saveData', 'downloadByDate']]);
    }

    public function getDataByType(Request $request)
    {
        $data = FlowForm::where('type', $request->query('type'))->get();
        return response()->json(['data' => $data], 200);
    }

    public function saveData(Request $request)
    {
        $form = FlowForm::create([
            'type' => $request->get('type'),
            'business_own' => $request->get('business_own'),
            'money_need' => $request->get('money_need'),
            'finance_for' => $request->get('finance_for'),
            'month_start' => $request->get('month_start'),
            'yeart_start' => $request->get('yeart_start'),
            'annual_revenue' => $request->get('annual_revenue'),
            'residential_loans' => $request->get('residential_loans'),
            'home_description' => $request->get('home_description'),
            'property_use' => $request->get('property_use'),
            'plan_to_purchase' => $request->get('plan_to_purchase'),
            'first_time_buyer' => $request->get('first_time_buyer'),
            'credit_profile' => $request->get('credit_profile'),
            'currently_employed' => $request->get('currently_employed'),
            'business_name' => $request->get('business_name'),
            'business_code' => $request->get('business_code'),
            'full_name' => $request->get('full_name'),
            'email' => $request->get('email'),
            'phone_number' => $request->get('phone_number'),
            'estimated_value_property' => $request->get('estimated_value_property'),
            'estimated_purchase_price' => $request->get('estimated_purchase_price'),
            'down_payment' => $request->get('down_payment'),
            'want_to_refinance' => $request->get('want_to_refinance'),
            'morgate_balance' => $request->get('morgate_balance'),
            'additional_cash' => $request->get('additional_cash')
        ]);

        $notification_user = [$request->get('email')];
        $notification_admins = ['raulcorreakemish@gmail.com']; //

        Mail::to($notification_user)->send(new MortgageMail($form,"Thanks for contacting us, ".$request->get('full_name'),"mortgage"));
        Mail::to($notification_admins)->send(new MortgageMail($form,"Notification - ".$request->get('full_name'),"notification"));

        return response()->json(['message' => 'Data saved'], 200);
    }

    
    public function downloadByDate(Request $request)
    {
       
        $type = $request->query('type');
        $start_date = $request->query('start_date');
        $end_date = $request->query('end_date');

        $start_date = Carbon::parse($start_date)->startOfDay();
        $end_date = Carbon::parse($end_date)->endOfDay();
        $name = $type . "-data.xlsx";

        return Excel::download(new FormExport($type, $start_date, $end_date), $name);
    }
}
