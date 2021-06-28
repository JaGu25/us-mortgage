<table>
    <thead>
        @if ($type == 'loan_business' || $type == 'free_quote_business')
            <tr>
                <th>Business Type </th>
                <th>Money needs </th>
                <th>Financing for </th>
                <th>Start Business </th>
                <th>Annual Revenue </th>
                <th>Credit Profile </th>
                <th>Business Name </th>
                <th>Business Code </th>
                <th>Full Name </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Registration date</th>
            </tr>
        @else
            <tr>
                <th>Residential Loans</th>
                <th>Home Description</th>
                <th>Property Use</th>
                <th>Plan to Purchase Your Home</th>
                <th>Estimated Purchase Price</th>
                <th>Mortgage Balance</th>
                <th>Want to refinance because</th>
                <th>Borrow additional cash</th>
                <th>Estimated Purchase Price</th>
                <th>Putting down as a down payment</th>
                <th>First Time Home Buyer?</th>
                <th>Credit Profile</th>
                <th>Currently employed?</th>
                <th>Business Code </th>
                <th>Full Name </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Registration date</th>
            </tr>
        @endif
    </thead>
    <tbody>
        @if ($type == 'loan_business' || $type == 'free_quote_business')
            @foreach ($flowsForms as $form)
                <tr>
                    <td>{{ $form->business_own }}</td>
                    <td>{{ $form->money_need }}</td>
                    <td>{{ $form->finance_for }}</td>
                    <td>{{ $form->month_start }} / {{ $form->yeart_start }} </td>
                    <td>{{ $form->annual_revenue }}</td>
                    <td>{{ $form->credit_profile }}</td>
                    <td>{{ $form->business_name }}</td>
                    <td>{{ $form->business_code }}</td>
                    <td>{{ $form->full_name }}</td>
                    <td>{{ $form->email }}</td>
                    <td>{{ $form->phone_number }}</td>
                    <td>{{ $form->created_at }}</td>
                </tr>
            @endforeach
        @else
            @foreach ($flowsForms as $form)
                <tr>
                    <td>{{ $form->residential_loans }}</td>
                    <td>{{ $form->home_description }}</td>
                    <td>{{ $form->property_use }}</td>
                    <td>
                        @if ($form->plan_to_purchase)
                            {{ $form->plan_to_purchase }}
                        @else
                            ---
                        @endif
                    </td>
                    <td>
                        @if ($form->estimated_value_property && $form->residential_loans == 'Cash Out')
                            $ {{ $form->estimated_value_property }}
                        @else
                            ---
                        @endif
                    </td>
                    <td>
                        @if ($form->residential_loans == 'Cash Out')
                            $ {{ ($form->estimated_value_property * $form->morgate_balance) / 100 }}
                        @else
                            ---
                        @endif
                    </td>
                    <td>
                        @if ($form->want_to_refinance)
                            {{ $form->want_to_refinance }}
                        @else
                            ---
                        @endif
                    </td>
                    <td>
                        @if ($form->additional_cash)
                            $ {{ $form->additional_cash }}
                        @else
                            ---
                        @endif
                    </td>
                    <td>
                        @if ($form->residential_loans == 'Cash Out')
                            ---
                        @else
                            $ {{ $form->estimated_purchase_price }}
                        @endif
                    </td>
                    <td>
                        @if ($form->residential_loans == 'Cash Out')
                            ---
                        @else
                            {{ $form->down_payment }} %
                        @endif
                    </td>
                    <td>
                        @if ($form->first_time_buyer)
                            {{ $form->first_time_buyer }}
                        @else
                            ---
                        @endif
                    </td>
                    <td>
                        @if ($form->credit_profile)
                            {{ $form->credit_profile }}
                        @else
                            ---
                        @endif
                    </td>
                    <td>{{ $form->currently_employed }}</td>
                    <td>{{ $form->business_code }}</td>
                    <td>{{ $form->full_name }}</td>
                    <td>{{ $form->email }}</td>
                    <td>{{ $form->phone_number }}</td>
                    <td>{{ $form->created_at }}</td>
                </tr>
            @endforeach
        @endif
    </tbody>
</table>
