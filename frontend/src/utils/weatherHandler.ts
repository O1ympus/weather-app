import {IUser} from '../types/User'

export default async function weatherHandler(user: IUser) {
	const res = await fetch(`/api/weather?lat=${user.location.coordinates.latitude}&lon=${user.location.coordinates.longitude}`);
	const weather = await res.json();
	
	return weather;
}
