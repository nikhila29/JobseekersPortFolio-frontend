import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts, updatePost } from "../../redux/actions/user";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "../../App.css"
import EditForm from "./EditForm";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import AddForm from "./addForm";


interface RowsData {
  id?: number,
  _id?: any,
  firstName?: string,
  lastName?: string,
  phoneNumber?: Number,
  age?: number,
  email?: string,
  updatedAt?: string,
  location?: string
}

const Table = () => {
  // (props: { deletedPost: any; actions: any; })

  const [rows, setRows] = useState<any>([])

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const users: any = useSelector((state: any) => state.getPosts.users.posts);

  const loginUser = useSelector((state: any) => state.loginUser.user)
  // console.log('table users--', users)

  // const rowData: RowsData[] = users.posts.map((item: RowsData,index:number)=>{
  //   return {
  //     id: index,
  //     _id: item._id,
  //     firstName: item.firstName,
  //     lastName: item.lastName,
  //     phoneNumber: item.phoneNumber,
  //     age: item.age,
  //     email: item.email,
  //     date: item.updatedAt,
  //     location: item.location,
  //   }

  // })
  // const rowData: RowsData[] = []


  // console.log('Rowdataaaa--', rowData);



  const handleEdit = (row: any) => {
    setOpen(true);
    dispatch(updatePost(row))
    // console.log('rowwww---', row);

  }

  useEffect(() => {
    dispatch(getPosts());
    setRows(users);

  }, []);

  const handleDelete = (_id: any) => {

    dispatch(deletePost(_id));
    setRows(rows.filter((item: any) => item._id !== _id))
    // console.log('delete--', _id);

    // dispatch(getPosts());
  };

  const columns: GridColDef[] = [
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
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 200,
      editable: false
    },
    {
      field: "age",
      headerName: "Age",
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
      field: "updatedAt",
      headerName: "Updated At",
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
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ((params): any => {
        return (
          <>
            {/* <EditIcon onClick={() => handleEdit(params.row)} >
              <EditForm {...params.row._id} />
            </EditIcon> */}
            <Button size="small" onClick={() => handleEdit(params.row)}>
              <EditIcon />
            </Button>

            <DeleteIcon onClick={() => handleDelete((params.row._id))} />
          </>
        )
      })
    }
  ];

  return (

    <Box sx={{ height: 500, width: '100%' }}>
      <NavBar />
      <button onClick={handleOpen} className="add-button">Add User</button>

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
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

  );
}

export default Table;
