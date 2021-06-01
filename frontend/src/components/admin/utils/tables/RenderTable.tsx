import React from 'react'
import DataTable from 'react-data-table-component';

type buttonType = 'submit' | 'button'

interface ITableProps {
    columns: any
    data: any
    title: string
}

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        }
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const Table: React.FC<ITableProps> = ({
    columns,
    data,
    title
}) => {
    return (
        <div>
            <DataTable title={title}
                pagination={true}
                customStyles={customStyles}
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default Table
