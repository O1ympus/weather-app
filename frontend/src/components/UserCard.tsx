'use client'

import Image from 'next/image'
import Button from './Button'
import weatherHandler from '../utils/weatherHandler'
import {IUser} from '../types/User'
import {useWeatherContext} from '../context/WeatherContext'
import {saveUser} from '../utils/usersApi'

interface Props {
	user: IUser,
	isSaveOptionAvailable: boolean
}

export default function UserCard({ user, isSaveOptionAvailable }: Props) {
	const { setIsModalWindowActive, setWeatherData, setLocation } = useWeatherContext();
	
	const handleWeatherClick = async () => {
		const weather = await weatherHandler(user);
		
		setWeatherData(weather);
		setIsModalWindowActive(true);
		setLocation({
			country: user.location.country,
			city: user.location.city,
		})
	}
	
	return (
		<div className="p-6 flex flex-col items-center
    backdrop-blur-sm rounded-xl shadow-md
    border border-white/30 h-fit 2xl:w-full
    hover:shadow-lg transition-shadow duration-300">
			<div className="relative rounded-full bg-gray-200 overflow-hidden mb-4">
				<Image
					src={user.picture.large}
					width={112}
					height={112}
					style={{ objectFit: 'cover' }}
					alt="avatar"
					loading="eager"
				/>
			</div>
			<div className="text-center space-y-1 mb-4">
				<h3 className="text-lg font-bold text-white mb-4">
					{user.name.title + ' ' + user.name.first + ' ' + user.name.last}
				</h3>
				<p className="text-sm text-left flex-col">
					<span className="text-gray-100">Gender: </span>
					<span className="font-thin text-gray-200">
						{user.gender}
					</span>
				</p>
				<p className="text-sm text-left">
					<span className="text-gray-100">Location: </span>
					<span className="font-thin text-gray-200">
						{user.location.street.name + ' ' + user.location.street.number}
					</span>
				</p>
				<p className="text-sm text-left">
					<span className="text-gray-100">Email: </span>
					<span className="font-thin text-gray-200">
						{user.email}
					</span>
				</p>
			</div>
			<div className="flex w-full">
				{isSaveOptionAvailable && (
					<Button
						text='save'
						onClick={async () => {
							const result = await saveUser(user);
							
							if (result) {
								alert('User saved successfully!');
							} else {
								alert('Failed to save user');
							}
						}}
					/>
				)}
				<Button text='weather' onClick={() => handleWeatherClick()}
				/>
			</div>
		</div>
	)
}
