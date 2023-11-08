import React from 'react'
import { logoutUser } from '../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { persistor } from '../redux/store'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: 'flex-start',
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	// Override media queries injected by theme.mixins.toolbar
	'@media all': {
		minHeight: 50,
	},
}));

export default function NavBar() {

	const dispatch = useDispatch()
	let navigate = useNavigate();
	const userData = useSelector((state: any) => state?.loginUser?.user);
	// console.log('navbar', userData);
	const showGridViewIcon = window.location.pathname.includes('/dashboard');
	const showListViewIcon = window.location.pathname.includes('/grid');

	const handleLogout = async () => {
		// localStorage.clear()
		// localStorage.removeItem('token');
		// localStorage.removeItem('persist:nproot')
		// console.log('llll---', localStorage);
		// persistor.pause();
		// persistor.flush().then(() => {
		//   return persistor.purge();
		// });
		// console.log('localStorage---', localStorage.removeItem('persist:nproot'));

		// await persistor.purge();

		dispatch(logoutUser())
		navigate('/login')
	}

	const handleuserchange = () => {
		navigate('/user-profile')
	}

	const handleList = () => {
		if(userData?.user?.role === "recruiter"){
			if (showGridViewIcon) {
				navigate('/grid')
			}
			else if (showListViewIcon) {
				navigate('/dashboard')
			}
		}

	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<StyledToolbar>
					<IconButton
						size="small"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={handleList}
					>
						{showGridViewIcon ? <GridViewIcon /> : <ViewListIcon />}
					</IconButton>

					<IconButton
					 	size="small"
						edge="end" 
						color="inherit"
						aria-label="open drawer"
						sx={{ ml: 'auto' }}
					   onClick={handleuserchange}
					>
						<AccountCircleIcon />
					</IconButton>

					<IconButton
						size="small"
						edge="end" 
						color="inherit"
						aria-label="open drawer"
						sx={{ ml: 'auto' }} 
						onClick={handleLogout}
					>
						<LogoutIcon />
					</IconButton>

				</StyledToolbar>
			</AppBar>
		</Box>
	);
}
