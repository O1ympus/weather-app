'use client'

import {useEffect, useState} from 'react'
import {IUser} from '../types/User'
import WeatherModal from './WeatherModal'
import UserCard from './UserCard'
import Button from './Button'

export default function UserList() {
	const [users, setUsers] = useState<IUser[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	
	const fetchUsers = async () => {
		setIsLoading(true)
		const res = await fetch(`/api/users?results=10`)
		const data = await res.json()
		setUsers(prev => [...prev, ...data.results])
		setIsLoading(false)
	}
	
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		fetchUsers()
	}, [])
	
	const handleLoadMore = () => {
		fetchUsers()
	}
	
	
	return (
		<div className={`px-6 w-full flex flex-col items-center max-w-[1536px] mx-auto`}>
			<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
				xl:grid-cols-4 gap-4 mb-6 w-full`
			}>
				{users.map(u => (
					<UserCard
						user={u}
						isSaveOptionAvailable={true}
						key={u.login.uuid}
					/>
				))}
			</div>
			<Button
				text="Load more"
				onClick={handleLoadMore}
				isLoading={isLoading}
				className="!w-full sm:!w-[320px]"
			/>
			
			<WeatherModal />
		</div>
	);
}
