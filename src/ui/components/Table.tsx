import React from 'react'
import DataTable from 'react-data-table-component'
export const Table: React.FC<Props> = (props) => {
    return (
        <DataTable
            title="Users"
            columns={props.columns}
            data={props.data}
            selectableRows={true}
            selectableRowsHighlight={true}
            highlightOnHover={true}
        />
    )
}

interface Props {
    columns: any[]
    data: any[]

}
