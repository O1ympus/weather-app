'use client'

import {ReactNode, useState} from 'react'
import {WeatherContext} from './WeatherContext'
import {IWeather} from '../types/Weather'
import {ILocation} from '../types/Location'

export const WeatherProvider = ({children}: {children: ReactNode}) => {
	const [isModalWindowActive, setIsModalWindowActive] = useState(false);
	const [weatherData, setWeatherData] = useState<IWeather | null>(null);
	const [location, setLocation] = useState<ILocation | null>(null)
	
	return (
		<WeatherContext.Provider value={{
				isModalWindowActive,
				setIsModalWindowActive,
				weatherData,
				setWeatherData,
				location,
				setLocation,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}
