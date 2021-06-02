import React, { useEffect, useState } from 'react'
import Table from '../../../components/admin/utils/tables/RenderTable'
import { getDataByType, RESIDENTIAL } from '../../../helpers/commons'
import moment from 'moment';
import DateRange from '../../../components/admin/utils/datepickers/DateRange';

const columns = [
    { name: 'Residential Loans', sortable: true, selector: "residential_loans", cell: (row: any) => (<p>{row.residential_loans}</p>) },
    { name: 'Home Description', sortable: true, selector: "home_description", cell: (row: any) => (<p>{row.home_description}</p>) },
    { name: 'Property Use', sortable: true, selector: "property_use", cell: (row: any) => (<p>{row.property_use}</p>)},
    { name: 'Plan to Purchase Your Home', sortable: true, selector: "plan_to_purchase", cell: (row: any) => (<p>{row.plan_to_purchase}</p>) },
    { name: 'First time home buyer?', sortable: true, selector: "first_time_buyer", },
    { name: 'Credit Profile', sortable: true, selector: "credit_profile", cell: (row: any) => (<p>{row.credit_profile}</p>) },
    { name: 'Business Code', sortable: true, selector: "business_code", cell: (row: any) => (<p>{row.business_code}</p>) },
    { name: 'First Name', sortable: true, cell: (row: any) => (<p>{row.first_name}</p>) },
    { name: 'Last Name', sortable: true, cell: (row: any) => (<p>{row.last_name}</p>) },
    { name: 'Email', sortable: true, selector: "email", cell: (row: any) => (<p>{row.email}</p>)},
    { name: 'Phone', sortable: true, selector: "phone_number",  cell: (row: any) => (<p>{row.phone_number}</p>) },
    { name: 'Registration date', sortable: true, cell: (row: any) => (<p>{moment(row.created_at).format('LL')}</p>) },
]

const Residential: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData(RESIDENTIAL);
    }, [])

    const getData = async (type: string) => {
        const data = await getDataByType(type)
        setData(data);
    }

    return (
        <div>
            <DateRange type={RESIDENTIAL} />
            <Table title="Residential" data={data} columns={columns} />
        </div>
    )
}

export default Residential
