import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from '../NavBar';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function UserDetails() {
	const { id } = useParams();
	const users = useSelector((state: any) => state.getPosts.users.posts);

	// Find the user with the matching id
	const user = users.find((user: any) => user._id === id);

	if (!user) {
		return <div>User not found</div>;
	}

	return (
		<div>
			<NavBar/>
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
									{user.firstName} {user.lastName}
								</Typography>
								<Typography sx={{ fontSize: 14, fontWeight: 'bold', cursor: 'pointer' }} color="text.secondary">
									{user.email}
								</Typography>
								<Typography sx={{ fontSize: 14, fontWeight: 'bold', cursor: 'pointer' }} color="text.secondary">
									{user.age}
								</Typography>
								<Typography sx={{ fontSize: 14, fontWeight: 'bold', cursor: 'pointer' }} color="text.secondary">
									{user.phoneNumber}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

			</Box>
		</div>

	);
}
