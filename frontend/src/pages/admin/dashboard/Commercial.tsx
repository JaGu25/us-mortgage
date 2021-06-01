import React, { useEffect, useState } from 'react'
import Table from '../../../components/admin/utils/tables/RenderTable';
import { COMMERCIAL, getDataByType } from '../../../helpers/commons';
import moment from 'moment';
import DateRange from '../../../components/admin/utils/datepickers/DateRange';

const columns = [
    { name: 'Business Own', sortable: true, selector: "business_own", },
    { name: 'Money need', sortable: true, selector: "money_need", },
    { name: 'Financing for', sortable: true, selector: "finance_for", },
    { name: 'Start Business', sortable: true, cell: (row: any) => (<p>{row.month_start} / {row.yeart_start}</p>) },
    { name: "Annual Revenue", sortable: true, selector: "annual_revenue", },
    { name: 'Name Business', sortable: true, selector: "business_name", },
    { name: 'Business Code', sortable: true, selector: "business_code", },
    { name: 'Credit Profile', sortable: true, selector: "credit_profile", },
    { name: 'First Name', sortable: true, cell: (row: any) => (<p>{row.first_name}</p>) },
    { name: 'Last Name', sortable: true, cell: (row: any) => (<p>{row.last_name}</p>) },
    { name: 'Email', sortable: true, selector: "email", },
    { name: 'Phone', sortable: true, selector: "phone_number", },
    { name: 'Registration date', sortable: true, cell: (row: any) => (<p>{moment(row.created_at).format('LL') }</p>) },
]

const Commercial: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData(COMMERCIAL);
    }, [])

    const getData = async (type: string) => {
        const data = await getDataByType(type)
        setData(data);
    }

    return (
        <div>
            <DateRange type={COMMERCIAL} />
            <Table title="Commercial" data={data} columns={columns} />
        </div>
    )
}

export default Commercial
