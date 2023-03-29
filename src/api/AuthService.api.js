import { Singleton } from "./Singleton";
import { Api } from "./Api";

export class AuthServiceApi extends Singleton {
	constructor() {
		super();
		this.api = new Api();
	}
	async login(values) {
		const data = await this.api.post('/login', values);
		console.log(data);
	}

	register() {

	}
}