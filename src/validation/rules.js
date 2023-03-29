import { array, boolean, number, string, date } from "yup";
import RULES_MESSAGES from "./messages";

const RULES = {
	name: string()
		.required(RULES_MESSAGES.required)
		.max(20, ''),

	surname: string()
		.required(RULES_MESSAGES.required)
		.max(20, ''),

	email: string()
		.required(RULES_MESSAGES.required)
		.email(RULES_MESSAGES.email),

	password: string()
		.required(RULES_MESSAGES.required)
		.min(6, 'More than 6 syms')
		.max(24, 'Less than 24 syms'),

	passwordConfirm: string()
		.required(),

	gender: number(),

	lovedCategories: array()
		.min(2, ''),

	newsSubscription: boolean(),

	bornAt: date()
		.required(),
};

export default RULES;
