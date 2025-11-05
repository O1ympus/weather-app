'use client'

import UserCard from './UserCard'
import {useUserStore} from '../store/useUserStore'
import {useEffect} from 'react'
import {getSavedUser} from '../utils/usersApi'

export default function SavedUserList() {
	const savedUsers = useUserStore((state) => state.users);
	const setUsers = useUserStore((state) => state.setUsers);
	
	useEffect(() => {
		async function fetchUsers() {
			const users = await getSavedUser();
			
			setUsers(users);
		}
		
		fetchUsers();
	}, [setUsers]);
	
	
	return (
		<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
				xl:grid-cols-4 gap-4 mb-6 w-full`}>
			{savedUsers.map(u => (
				<UserCard
					user={u}
					isSaveOptionAvailable={false}
					key={u.login.uuid}
				/>
			))}
		</div>
	);
}
