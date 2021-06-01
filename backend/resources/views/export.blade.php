<table>
    <thead>
        @if ($type == 'commercial')
            <tr>
                <th>Business Own</th>
                <th>Money need</th>
                <th>Financing for</th>
                <th>Start Business</th>
                <th>Annual Revenue</th>
                <th>Name Business</th>
                <th>Business Code</th>
                <th>Credit Profile</th>
                <th>First Name</th>
                <th>Last Name</th>
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
                <th>First time home buyer?</th>
                <th>Credit Profile</th>
                <th>Business Code</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Registration date</th>
            </tr>
        @endif
    </thead>
    <tbody>
        @if ($type == 'commercial')
            @foreach ($flowsForms as $form)
                <tr>
                    <td>{{ $form->business_own }}</td>
                    <td>{{ $form->money_need }}</td>
                    <td>{{ $form->finance_for }}</td>
                    <td>{{ $form->month_start }} / {{ $form->yeart_start }} </td>
                    <td>{{ $form->annual_revenue }}</td>
                    <td>{{ $form->business_name }}</td>
                    <td>{{ $form->business_code }}</td>
                    <td>{{ $form->credit_profile }}</td>
                    <td>{{ $form->first_name }}</td>
                    <td>{{ $form->last_name }}</td>
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
                    <td>{{ $form->plan_to_purchase }}</td>
                    <td>{{ $form->first_time_buyer }}</td>
                    <td>{{ $form->credit_profile }}</td>
                    <td>{{ $form->business_code }}</td>
                    <td>{{ $form->first_name }}</td>
                    <td>{{ $form->last_name }}</td>
                    <td>{{ $form->email }}</td>
                    <td>{{ $form->phone_number }}</td>
                    <td>{{ $form->created_at }}</td>
                </tr>
            @endforeach
        @endif
    </tbody>
</table>
