import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRegisteredUsers} from "../../redux/actions/user";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Modal } from "@mui/material";
import '../../App.css'
import NavBar from "../NavBar";
// import { format } from 'date-fns';

interface RowsData {
  id?: number,
  _id?: any,
  firstName?: string,
  lastName?: string,
  email?: string,
  createdAt?: string,
  location?: string
}

const Dashboard = () => {

  const [rows, setRows] = useState<any>([])

  const dispatch = useDispatch()

  const users: any = useSelector((state: any) => state?.getAllRegisteredUsers?.users);

  const loginUser = useSelector((state: any) => state.loginUser.user)

  useEffect(() => {
    dispatch(getAllRegisteredUsers());

    // Add a dynamically incrementing S.No to each user
    const rowsWithSNo = users?.map((user: RowsData, index: number) => ({
      ...user,
      id: index + 1, // Add S.No starting from 1
      createdAt: user.createdAt ? user.createdAt.split('T')[0] : '',
    }));

    setRows(rowsWithSNo);
  }, [dispatch, users?.length]);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "S.No",
      width: 200,
      editable: true
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      editable: true
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 200,
      editable: false
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: false
    },
    {
      field: "location",
      headerName: "Location",
      width: 200,
      editable: false
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      editable: false
    },
 
  ];

  return (

    <Box sx={{ height: 500, width: '100%' }}>
      <NavBar />
      <div className="header">Employers Registration Details</div>
      <DataGrid
        getRowId={(rows) => rows._id}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>

  );
}

export default Dashboard;
