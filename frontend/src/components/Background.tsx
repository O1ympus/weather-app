'use client'

import Image from 'next/image'
import {useWeatherContext} from '../context/WeatherContext'
import {useEffect} from 'react'

export default function Background() {
	const { isModalWindowActive } = useWeatherContext();
	
	useEffect(() => {
		if (isModalWindowActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isModalWindowActive]);
	
	return (
		<Image
			src='/images/bubbles.svg'
			alt='bubbles'
			fill
			className="absolute top-0 left-0 right-0 bottom-0"
			loading="eager"
		/>
	)
}
