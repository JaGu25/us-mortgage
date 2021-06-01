<?php

namespace App\Exports;

use App\Models\FlowForm;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class FormExport implements FromView
{

    public function __construct($type, $startDate, $endDate)
    {
        $this->type = $type;
        $this->startDate = $startDate;
        $this->endDate = $endDate;
    }


    public function view(): View
    {
        return view('export', [
            'flowsForms' => FlowForm::where('type', $this->type)->whereBetween('created_at', [$this->startDate, $this->endDate])->get(),
            'type' => $this->type
        ]);
    }
}
