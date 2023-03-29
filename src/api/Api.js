import { Singleton } from "./Singleton";

export class Api {
	#prefix = '/api';

	get(route) {
		return fetch(this.#prefix + route).then(resp => {
			if (resp.ok) return resp.json();
		}).catch((err) => {
			return {
				error: err.message,
			};
		});
	}

	post(route, data) {
		return fetch(this.#prefix + route, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(resp => {
			if (resp.ok) return resp.json();
		}).catch((err) => {
			return {
				error: err.message,
			};
		});
	}

	put() {

	}

	delete() {

	}
}