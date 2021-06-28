import React, { useEffect, useState } from 'react'
import Table from '../../../components/admin/utils/tables/RenderTable';
import { FREE_QUOTE_RESIDENTIAL, getDataByType } from '../../../helpers/commons';
import moment from 'moment';
import DateRange from '../../../components/admin/utils/datepickers/DateRange';

const columns = [
    { name: 'Residential Loans', sortable: true, selector: "residential_loans", cell: (row: any) => (<p>{row.residential_loans}</p>) },
    { name: 'Home description', sortable: true, selector: "home_description", cell: (row: any) => (<p>{row.home_description}</p>) },
    { name: 'Property use', sortable: true, selector: "property_use", cell: (row: any) => (<p>{row.property_use}</p>) },
    { name: 'Plan to Purchase Home', sortable: true, selector: "plan_to_purchase", cell: (row: any) => (<p>{row.plan_to_purchase ? row.plan_to_purchase : '---'}</p>) },
    {
        name: 'Estimated Purchase Price', sortable: true, selector: "plan_to_purchase",
        cell: (row: any) => (<p>{row.estimated_value_property && row.residential_loans == "Cash Out" ? '$ ' + parseInt(row.estimated_value_property).toLocaleString('es-US') : '---'}</p>)
    },
    {
        name: 'Mortgage Balance', sortable: true, selector: "mortgate_balance",
        cell: (row: any) => (<p>{row.residential_loans == "Cash Out" ?
            '$ ' + (parseInt(row.estimated_value_property) * parseInt(row.morgate_balance) / 100).toLocaleString('es-US') : '---'}</p>)
    },
    { name: 'Want to refinance because', sortable: true, selector: "want_to_refinance", cell: (row: any) => (<p>{row.want_to_refinance ? row.want_to_refinance : '---'}</p>) },
    { name: 'Borrow additional cash', sortable: true, selector: "additional_cash", cell: (row: any) => (<p>{row.additional_cash ? '$ ' + row.additional_cash.toLocaleString('es-US') : "---"}</p>) },
    {
        name: 'Estimated Purchase Price', sortable: true, selector: "additional_cash", cell: (row: any) => {
            if (row.residential_loans == "Cash Out") {
                return '---';
            }
            const [value1, value2] = row.estimated_purchase_price.split('-');
            return (<p>$ {parseInt(value1).toLocaleString('es-US')} to $ {parseInt(value2).toLocaleString('es-US')} </p>);
        }
    },
    {
        name: 'Putting down as a down payment', sortable: true, selector: "additional_cash", cell: (row: any) => {
            if (row.residential_loans == "Cash Out") {
                return '---';
            }
            const [value1, value2] = row.down_payment.split('-');
            return (<p>{parseInt(value1).toLocaleString('es-US')} to {parseInt(value2).toLocaleString('es-US')}% </p>);
        }
    },
    { name: 'First Time Home Buyer?', sortable: true, selector: "first_time_buyer", cell: (row: any) => (<p>{row.first_time_buyer ? row.first_time_buyer : '---'}</p>) },
    { name: 'Credit Profile', sortable: true, selector: "credit_profile", cell: (row: any) => (<p>{row.credit_profile ? row.credit_profile : '---'}</p>) },
    { name: 'Currently employed?', sortable: true, selector: "currently_employed", cell: (row: any) => (<p>{row.currently_employed}</p>) },
    { name: 'Business Code', sortable: true, selector: "business_code", cell: (row: any) => (<p>{row.business_code}</p>) },
    { name: 'Full Name', sortable: true, cell: (row: any) => (<p>{row.full_name}</p>) },
    { name: 'Email', sortable: true, selector: "email", cell: (row: any) => (<p>{row.email}</p>) },
    { name: 'Phone', sortable: true, selector: "phone_number", cell: (row: any) => (<p>{row.phone_number}</p>) },
    { name: 'Registration date', sortable: true, cell: (row: any) => (<p>{moment(row.created_at).format('LL')}</p>) },
]

const FreeQuoteResidential: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData(FREE_QUOTE_RESIDENTIAL);
    }, [])

    const getData = async (type: string) => {
        const data = await getDataByType(type)
        setData(data);
    }

    return (
        <div>
            <DateRange type={FREE_QUOTE_RESIDENTIAL} />
            <Table title="Free Quote Residential" data={data} columns={columns} />
        </div>
    )
}

export default FreeQuoteResidential
