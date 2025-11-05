'use client'

import {useEffect} from 'react'
import {useWeatherContext} from '../context/WeatherContext'

interface Props {
	text: string,
	onClick?: () => void,
	isLoading?: boolean,
	className?: string,
}

export default function Button({text, onClick, isLoading, className}: Props) {
	const { isModalWindowActive } = useWeatherContext();
	
	useEffect(() => {
		if (isModalWindowActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isModalWindowActive]);
	
	return (
		<button
			type="button"
			className={`w-full text-white bg-transparent border border-gray-300
		    focus:outline-none hover:bg-[#7D7F8A] focus:ring-1 focus:ring-gray-100
		    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer
		    z-50 ${className}
     `}
			onClick={onClick}
			disabled={isLoading}
		>
			{text}
		</button>
	);
}
