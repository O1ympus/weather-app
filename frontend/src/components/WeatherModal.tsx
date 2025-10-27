'use client'

import {useWeatherContext} from '../context/WeatherContext'
import Image from 'next/image'
import {getWeatherIcon} from '../types/WeatherIcons'
import DateComponent from './Date'
import WeatherMetrics from './WeatherMetrics'
import {getDate} from '../utils/getDate'
import CurrentLocation from './CurrentLocation'

export default function WeatherModal() {
	const {
		weatherData,
		location,
		isModalWindowActive,
		setIsModalWindowActive
	} = useWeatherContext();

	const weatherCode = Number(weatherData?.icon) || 0;
	const weatherName = getWeatherIcon(weatherCode);
	const weatherPath = `images/weather-icons/${weatherName}`
	
	const [dayName, finalDate] = getDate();
	
	if (!isModalWindowActive) {
		return null;
	}

	return (
		<div
			className={` mx-6 bg-[#1E1E1E]/20 rounded-xl px-2 py-8
				fixed backdrop-blur-sm w-[calc(100%-48px)]
				border border-white/20 shadow-lg sm:px-6 md:h-[350px]
				max-w-[780px] top-1/2 -translate-y-1/2
				xl:w-[80%] xl:h-[500px] xl:flex xl:flex-col xl:justify-between
				xl:max-w-[1050px] xl:pt-12
			`}
		>
			<div className={`flex flex-col-reverse justify-between items-center
				sm:flex-row
			`}>
				<DateComponent finalDate={finalDate} dayName={dayName} />
				<CurrentLocation location={location || {country: '', city: ''}} />
			</div>
			
			<div className={`flex flex-col items-center justify-between
				md:flex-row
			`}>
				<div className={`md:w-[50%] h-full flex items-center justify-center xl:w-[45%]`}>
					<div className={`w-[250px] h-[250px] xl:h-[350px] xl:w-full
						relative
					`}>
						<Image
							src={weatherPath}
							alt={weatherName.split('.')[0]}
							fill
							loading="eager"
							style={{objectFit: "contain"}}
						/>
					</div>
				</div>
				
				<WeatherMetrics weatherData={weatherData} />
			</div>
			
			<button
				className={`absolute right-2 top-2 w-[14px] h-[14px] xl:w-[28px] xl:h-[28px]
					xl:right-4 xl:top-4 cursor-pointer
				`}
				onClick={() => setIsModalWindowActive(false)}
			>
				<Image
					src="/images/x.svg"
					fill
					alt="x"
				/>
			</button>
		</div>
	)
}
