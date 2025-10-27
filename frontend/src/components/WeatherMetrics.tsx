import Image from 'next/image'
import {IWeather} from '../types/Weather'

interface Props {
	weatherData: IWeather | null
}

export default function WeatherMetrics({weatherData}: Props) {
	return (
		<div className={`text-white flex flex-col items-center w-[40%] gap-3
			md:w-[50%] xl:flex-row xl:w-[45%] xl:justify-between
		`}>
			<h3 className={`font-thin text-8xl xl:text-9xl`}>
				{weatherData?.currentTemperature || 0}°C
			</h3>
			<div className={`flex gap-5 xl:flex-col`}>
				<div className={`flex gap-2 text-xl items-center xl:text-4xl`}>
					<div className={`w-4 h-4 relative xl:w-7 xl:h-7`}>
						<Image
							src='/images/arrow-top.svg'
							alt='arrow-top'
							fill
							style={{objectFit: "contain"}}
						/>
					</div>
					<span>{weatherData?.highestTemperature || 0}°C</span>
				</div>
				
				<div className={`flex gap-2 text-xl items-center xl:text-4xl`}>
					<div className={`w-4 h-4 relative xl:w-7 xl:h-7`}>
						<Image
							src='/images/arrow-bottom.svg'
							alt='arrow-bottom'
							fill
							style={{objectFit: "contain"}}
						/>
					</div>
					<span>{weatherData?.lowestTemperature || 0}°C</span>
				</div>
			</div>
		</div>
	);
}
