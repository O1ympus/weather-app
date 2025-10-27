import {IUser} from '../types/User'

export async function saveUser(user: IUser) {
	try {
		const res = await fetch('http://localhost:3001/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		});
		
		if (!res.ok) {
			throw new Error('Failed to save user');
		}
		
		return await res.json();
		
	} catch (e) {
		console.error(e);
		return null;
	}
}

export async function getSavedUser() {
	try {
		const res = await fetch('http://localhost:3001/users', {
			method: 'GET',
		});
		
		if (!res.ok) {
			throw new Error('Failed to fetch users');
		}
		
		return res.json();
	} catch (e) {
		console.error(e);
		return [];
	}
}
