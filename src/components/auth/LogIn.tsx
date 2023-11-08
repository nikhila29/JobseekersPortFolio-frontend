import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/user';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure({ autoClose: 1000, position: toast.POSITION.TOP_RIGHT });

function Copyright(props: any) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LogIn() {


	let navigate = useNavigate();
	const userToken = useSelector((state: any) => state?.loginUser?.user)
	const userData = useSelector((state: any) => state?.loginUser?.user)
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
	// console.log('login userDatalog----', userData);

	const dispatch = useDispatch()

	// useEffect(()=>{
	//   dispatch(loginUser({ ...formData, navigate }));
	// },[formData])

	const handleSave = async () => {

		if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)) {
			toast.error('Invalid Email please check.....')
			return
		}
	 
		await dispatch(loginUser({ ...formData, navigate }));
		if(userData?.successMessage){
			// console.log('userdata.mess--', userData);
			
			toast.success('User signed in Successfully!!.....')
		} else if(userData?.response?.data?.error){
			// console.log('userdata.mess--', userData);
			toast.error('Invalid Email or Password please check.....')
		}
	 
	}
	useEffect(() => {
		if(userData) {
			// console.log('userData?.error--',userData)
			if(userData?.data?.error){
				// console.log('userData?.error--',userData.data.error)
				toast.error('Email doesnot exist....')
			}
		}
	}, [userData]);

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password')
		});
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value={formData.email}
							onChange={handleInputChange}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={formData.password}
							onChange={handleInputChange}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={() => handleSave()}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="/reset-password" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}