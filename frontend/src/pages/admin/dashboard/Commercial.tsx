import React, { useEffect, useState } from 'react'
import Table from '../../../components/admin/utils/tables/RenderTable';
import { COMMERCIAL, getDataByType } from '../../../helpers/commons';
import moment from 'moment';
import DateRange from '../../../components/admin/utils/datepickers/DateRange';

const columns = [
    { name: 'Business Own', sortable: true, selector: "business_own", cell: (row: any) => (<p>{row.business_own}</p>) },
    { name: 'Money need', sortable: true, selector: "money_need", cell: (row: any) => (<p>{row.money_need}</p>) },
    { name: 'Financing for', sortable: true, selector: "finance_for", cell: (row: any) => (<p>{row.finance_for}</p>) },
    { name: 'Start Business', sortable: true, cell: (row: any) => (<p>{row.month_start} / {row.yeart_start}</p>) },
    { name: "Annual Revenue", sortable: true, selector: "annual_revenue", cell: (row: any) => (<p>{row.annual_revenue}</p>) },
    { name: 'Name Business', sortable: true, selector: "business_name", cell: (row: any) => (<p>{row.business_name}</p>) },
    { name: 'Business Code', sortable: true, selector: "business_code", cell: (row: any) => (<p>{row.business_code}</p>) },
    { name: 'Credit Profile', sortable: true, selector: "credit_profile", cell: (row: any) => (<p>{row.credit_profile}</p>) },
    { name: 'First Name', sortable: true, cell: (row: any) => (<p>{row.first_name}</p>) },
    { name: 'Last Name', sortable: true, cell: (row: any) => (<p>{row.last_name}</p>) },
    { name: 'Email', sortable: true, selector: "email", cell: (row: any) => (<p>{row.email}</p>) },
    { name: 'Phone', sortable: true, selector: "phone_number",  cell: (row: any) => (<p>{row.phone_number}</p>) },
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
