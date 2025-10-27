'use client'

import UserCard from '../../components/UserCard'
import WeatherModal from '../../components/WeatherModal'
import {useUserStore} from '../../store/useUserStore'
import useLoadUsers from '../../hooks/useLoadUsers'

export default function SavedUsers() {
	const savedUsers = useUserStore((state) => state.users);
	
	useLoadUsers();
	
	return (
		<div className={`px-6 w-full flex flex-col items-center max-w-[1536px] mx-auto`}>
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
			<WeatherModal />
		</div>
	);
}
