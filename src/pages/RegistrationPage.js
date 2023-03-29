import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel, FormLabel,
	Grid, Radio, RadioGroup, Switch,
	TextField,
	Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationSchema } from "../validation/schemas";
import { CategoriesServiceApi } from "../api/CategoiesService.api";

const RegistrationPage = () => {
	const navigate = useNavigate();
	const [checkedCategories, setCheckedCategories] = useState([]);
	const [isSecretQuestionTypeChosen, setIsSecretQuestionTypeChosen] = useState(false);

	const { register, handleSubmit, watch, formState: { errors }, control } = useForm({
		resolver: yupResolver(RegistrationSchema),
		defaultValues: {
			name: '',
			surname: '',
			email: '',
			password: '',
			bornAt: '',
			isSubscribed: true,
			interests: [],
			secret: {
				type: '',
				answer: '',
			},
		}
	});
	console.log(watch());

	useEffect(() => {
		if (checkedCategories.length) return;
		new CategoriesServiceApi().getCategories()
			.then((categories) => {
				setCheckedCategories(categories.map((item) => {
					return {
						...item,
						checked: false,
					};
				}));
			});
	}, []);

	function submitHandler(values) {
		console.log(values);
	}

	function goBackMainPage() {
		navigate('/');
	}

	const categoriesBoxes = (
		<Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
			{
				checkedCategories.map((category) =>
					<FormControlLabel
						control={<Checkbox checked={category.checked} onChange={() => {}} />}
						label={category.label}
						key={category.id}
					/>
				)
			}
		</Box>
	);

	return (
		<Container
			component="main"
			maxWidth="xs"
			sx={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					marginTop: 4,
					marginBottom: 6,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit(submitHandler)} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="given-name"
								required
								fullWidth
								label="First Name"
								autoFocus
								error={!!errors.name}
								helperText={errors.name ? errors.name.message : ''}
								{...register('name')}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								label="Last Name"
								autoComplete="family-name"
								error={!!errors.surname}
								helperText={errors.surname ? errors.surname.message : ''}
								{...register('surname')}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								label="Email Address"
								autoComplete="email"
								error={!!errors.email}
								helperText={errors.email ? errors.email.message : ''}
								{...register('email')}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								label="Password"
								type="password"
								autoComplete="new-password"
								error={!!errors.password}
								helperText={errors.password ? errors.password.message : ''}
								{...register('password')}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="bornAt"
								control={control}
								render={({ field: { onChange, ...restField } }) => (
									<DatePicker
										label="Date of birth"
										format="DD/MM/YYYY"
										sx={{ width: '100%' }}
										onChange={(event) => onChange(event.toString())}
										{...restField}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormLabel>Gender</FormLabel>
							<Controller
								name="gender"
								control={control}
								render={({ field }) => (
									<RadioGroup row {...field} >
										<FormControlLabel value="male" control={<Radio />} label="Male" />
										<FormControlLabel value="female" control={<Radio />} label="Female" />
										<FormControlLabel value="other" control={<Radio />} label="Other" />
									</RadioGroup>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								label="Parent"
								control={
									<Checkbox
										checked={checkedCategories[0] && checkedCategories[1]}
										indeterminate={checkedCategories[0] !== checkedCategories[1]}
										onChange={() => {}}
									/>
								}
							/>
							{categoriesBoxes}
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Switch defaultChecked />}
								label="I want to receive inspiration, marketing promotions and updates via email"
								{...register('isSubscribe')}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								label="Secret Question"
								type="text"
								autoComplete="secret-question"
								onInput={(event) => {
									if (!isSecretQuestionTypeChosen && event.target.value.trim()) {
										setIsSecretQuestionTypeChosen(true);
									} else if (isSecretQuestionTypeChosen && !event.target.value.trim()) {
										setIsSecretQuestionTypeChosen(false);
									}
								}}
								{...register('secret.type')}
							/>
						</Grid>
						{
							isSecretQuestionTypeChosen && (
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										name="secretAnswer"
										label="Secret Answer"
										type="text"
										autoComplete="secret-answer"
										{...register('secret.answer')}
									/>
								</Grid>
							)
						}
					</Grid>
					<Grid item xs={12} display="flex" justifyContent="space-between">
						<Button
							color="error"
							type="button"
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={goBackMainPage}
						>
							Cancel
						</Button>
						<Button
							color="secondary"
							type="submit"
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
					</Grid>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link to="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default RegistrationPage;