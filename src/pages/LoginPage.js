import React from 'react';
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../validation/schemas";
import { AuthServiceApi } from "../api/AuthService.api";

const LoginPage = () => {
	const { handleSubmit, register, formState: { errors } } = useForm({
		resolver: yupResolver(LoginSchema),
	});
	const authService = AuthServiceApi.getInstance();

	function onSubmit(data) {
		authService.login(data);
	}

	return (
		<Container
			component="main"
			maxWidth="xs"
			className="auth-wrapper"
			sx={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
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
				<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Email Address"
						autoComplete="email"
						autoFocus
						error={!!errors.email}
						helperText={errors.email ? errors.email.message : ''}
						{...register('login')}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Password"
						type="password"
						error={!!errors.password}
						helperText={errors.password ? errors.password.message : ''}
						{...register('password')}
					/>
					{/*<FormControlLabel*/}
					{/*	control={<Checkbox value="remember" color="primary" />}*/}
					{/*	label="Remember me"*/}
					{/*/>*/}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link to="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to="/registration" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginPage;