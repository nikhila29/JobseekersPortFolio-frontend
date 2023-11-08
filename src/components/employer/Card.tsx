import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from '../NavBar';
import "../../App.css"
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Modal } from "@mui/material";
import { useEffect, useState } from 'react';
import AddForm from './addForm';
// import EditForm from './EditForm';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts, updatePost } from "../../redux/actions/user";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function BasicCard() {

	const [open, setOpen] = useState(false);
	const [rows, setRows] = useState<any>([]);
	let navigate = useNavigate();

	const users: any = useSelector((state: any) => state.getPosts.users?.posts);
	const user = useSelector((state: any) => state.addPost?.error)
	const dispatch = useDispatch()

	console.log('usuu---', users)

	const handleEdit = (row: any) => {
		setOpen(true);
		dispatch(updatePost(row))
		// console.log('rowwww---', row);

	}

	useEffect(() => {
		// Fetch data using the Redux action, but don't set `rows` here

			dispatch(getPosts());
			setRows(users);
	
		
	  },  [dispatch, users?.length]); 
	  

	const handleDelete = (_id: any) => {

		dispatch(deletePost(_id));
		setRows(rows?.filter((item: any) => item._id !== _id))
		dispatch(getPosts());
		// setRows(users);
	};

	const handleRedirectUser = () => {
		navigate('/user/:id')
	}


	return (
		<div>
			<NavBar />
			<div className='no'>
				{users?.length > 0 ? (
				null
				) : (
					<h1>No Portfolio found.   
					<Link to="/add-portfolio" style={{ textDecoration: "revert", color: "blue" }}>
						click here to create 
					</Link>
					</h1>
				)}
			</div>

			{rows?.map((user: any) => (
				<Box key={user._id}
					sx={{
						flexGrow: 2,
						display: 'inline-block',
						minWidth: 275,
						mx: '2px',
						transform: 'scale(0.9)',
						border: '2px solid #cecece',
						boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
						borderRadius: '8px',
						padding: '20px',
						margin: '50px'
					}}
				>

					<Grid container spacing={4}>
						<Grid item xs={8}>
							<Card sx={{ minWidth: 275 }}>
								<CardContent>
									<Typography >
										<AccountCircleIcon />
									</Typography>
									<Typography sx={{ fontSize: 14, fontWeight: 'bold', cursor: 'pointer' }} color="text.secondary">
										<Link to={`/user/${user._id}`} style={{ textDecoration: 'none' }}>
											{user.firstName} {user.lastName}
										</Link>
									</Typography>

								</CardContent>
								<CardActions>
									{/* <Button size="small"><EditIcon onClick={() => handleEdit(user)}><EditForm {...user} /></EditIcon></Button> */}
									<Button size="small"><DeleteIcon onClick={() => handleDelete(user._id)} /></Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>

				</Box>
			))}
		</div>

	);
}
