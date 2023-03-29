import * as yup from 'yup';
import RULES from './rules';

const {
	email,
	password,
	lovedCategories,
	bornAt,
	name,
	surname,
	gender,
	newsSubscription,
	passwordConfirm
} = RULES;

export const LoginSchema = yup.object().shape({
	login: email,
	password,
});

export const RegistrationSchema = yup.object().shape({
	email,
	password,
	lovedCategories,
	bornAt,
	name,
	surname,
	gender,
	newsSubscription,
	passwordConfirm,
});