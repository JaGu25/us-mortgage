import React, { useEffect, useState } from 'react'
import Table from '../../../components/admin/utils/tables/RenderTable'
import { getDataByType, RESIDENTIAL } from '../../../helpers/commons'
import moment from 'moment';
import DateRange from '../../../components/admin/utils/datepickers/DateRange';

const columns = [
    { name: 'Residential Loans', sortable: true, selector: "residential_loans", },
    { name: 'Home Description', sortable: true, selector: "home_description", },
    { name: 'Property Use', sortable: true, selector: "property_use", },
    { name: 'Plan to Purchase Your Home', sortable: true, selector: "plan_to_purchase", cell: (row: any) => (<p>{row.plan_to_purchase}</p>) },
    { name: 'First time home buyer?', sortable: true, selector: "first_time_buyer", },
    { name: 'Credit Profile', sortable: true, selector: "credit_profile", },
    { name: 'Business Code', sortable: true, selector: "business_code", },
    { name: 'First Name', sortable: true, cell: (row: any) => (<p>{row.first_name}</p>) },
    { name: 'Last Name', sortable: true, cell: (row: any) => (<p>{row.last_name}</p>) },
    { name: 'Email', sortable: true, selector: "email", },
    { name: 'Phone', sortable: true, selector: "phone_number", },
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
