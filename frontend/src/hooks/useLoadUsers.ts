import {useUserStore} from '../store/useUserStore'
import {useEffect} from 'react'
import {getSavedUser} from '../utils/usersApi'

export default function useLoadUsers() {
	const setUsers = useUserStore((state) => state.setUsers);
	
	useEffect(() => {
		async function fetchUsers() {
			const users = await getSavedUser();

			setUsers(users);
		}
		
		fetchUsers();
	}, [setUsers]);
}
