import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from '.././NavBar';
import '../../App.css';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Modal } from "@mui/material";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllRegisteredUsers, getPosts, updatePost } from "../../redux/actions/user";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function RecruiterCard() {

	const [rows, setRows] = useState<any>([]);
	let navigate = useNavigate();

	const dispatch = useDispatch()
	const allUser: any = useSelector((state: any) => state?.getPosts?.users?.posts);
	// console.log('cardd userss----', allUsers)


	useEffect(() => {
		dispatch(getPosts());
		setRows(allUser);
		// console.log('rcccc--',allUser);

	}, []);

	return (
		<div>
			<NavBar />
			<div className="header">Job Seekers Details</div>
			{rows.length === 0 ? (
				<div className='no-data'>No data found</div>
			) : (
				<div>
					{rows.map((user: any) => (
						<Box
							key={user._id}
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
								margin: '50px',
							}}
						>
							<Grid container spacing={4}>
								<Grid item xs={8}>
									<Card sx={{ minWidth: 275 }}>
										<CardContent>
											<Typography>
												<AccountCircleIcon />
											</Typography>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: '900',
													cursor: 'pointer',
												}}
												color="text.secondary"
											>
												<Link
													to={`/user/${user._id}`}
													style={{ textDecoration: 'none' }}
												>
													{user.firstName} {user.lastName}
												</Link>
											</Typography>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: '900',
													cursor: 'pointer',
												}}
												color="text.secondary"
											>
											{user.email}
											</Typography>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: '900',
													cursor: 'pointer',
												}}
											>
											Experience: {user.experience}
											</Typography>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: '900',
													cursor: 'pointer',
												}}
											>
											Actively Looking: {user.status}
											</Typography>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: '900',
													cursor: 'pointer',
													display:'flex'
												}}
											>
											Location:   <div className="name">{user.location}</div>
											</Typography>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: '900',
													cursor: 'pointer',
												}}
											>
											Role: {user.role}
											</Typography>
											<Typography
												sx={{
													fontSize: 14,
													fontWeight: '900',
													cursor: 'pointer',
												}}
											>
											Updated At: {user.updatedAt.split('T')[0]}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Box>
					))}
				</div>
			)}
		</div>

	);
}
