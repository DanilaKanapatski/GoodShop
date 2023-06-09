import React from 'react';
import { Container, Grid, TextField, } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as NikeSvg } from '../../assets/nike.svg';
import { SearchBar } from "../SearchBar";

import './styles.css';

export const MainHeader = () => {
	return (
		<Grid container className='header' sm={12} pt={2} pb={2} sx={{ boxShadow: '0 3px 4px lightgray' }}>
			<Container sx={{ display: 'flex' }}>
				<Grid item sm={2}>
					<NikeSvg />
				</Grid>
				<Grid item sm={8}>
					<SearchBar/>
				</Grid>
				<Grid item sm
				      display="flex"
				      alignItems="center"
				      justifyContent="space-between"
				      pr={2} pl={2}
				>
					<Link
						to="/login"
						className="link"
					>Войти</Link>
					<Link
						to="/cart"
						className="link"
					>Корзина</Link>
				</Grid>
			</Container>
		</Grid>
	);
};