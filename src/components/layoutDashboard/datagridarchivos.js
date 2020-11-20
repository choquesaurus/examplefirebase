import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${
//         params.getValue('lastName') || ''
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataGridArchivos({data}) {
    const columns = [
        // { field: 'id', headerName: 'id', width: 70 },
        {field:'date',
        headerName:"Fecha",
        //type:'string',
        width:180    
        },
        {field:'name',
        headerName:"Nombre del archivo",
        //type:'string',
        width:250    
        },
        {field:'link',
        headerName:"Link u Ubicación",
        width:480    
        },
        {
            field: "VerMas",
            width:150,
            headerName: "Ver más",
            renderCell: (params) => {
              //console.log(params);
              return <Button onClick={()=>{window.location.href=params.getValue("link")}} color="primary" variant="contained" >Ver más</Button>;
            },
        }
    ]
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
