'use client'

import {IWeatherContext} from '../types/WeatherContext'
import {createContext, useContext} from 'react'

export const WeatherContext = createContext<IWeatherContext | undefined>(undefined);

export const useWeatherContext = () => {
	const context = useContext(WeatherContext);
	
	if (!context) {
		throw new Error('useWeatherContext must be used within WeatherContext.Provider');
	}
	
	return context;
}
