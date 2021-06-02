<?php

namespace App\Mail;

use App\Models\Correo;
use App\Models\FlowForm;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MortgageMail extends Mailable
{
    use Queueable, SerializesModels;

    public $form;
    public $subject;
    public $view;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(FlowForm $form, $subject, $view)
    {
        $this->form = $form;
        $this->subject = $subject;
        $this->view = $view;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->subject)->view('mails.'.$this->view);
    }
}
