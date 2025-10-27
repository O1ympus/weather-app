import {IWeather} from './Weather'
import {ILocation} from './Location'

export interface IWeatherContext {
	isModalWindowActive: boolean,
	setIsModalWindowActive: (value: boolean) => void,
	weatherData: IWeather | null,
	setWeatherData: (value: IWeather) => void,
	location: ILocation | null,
	setLocation: (value: ILocation) => void,
}
