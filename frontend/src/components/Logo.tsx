'use client'

import {PAGES} from '../config/pages.config'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import {useWeatherContext} from '../context/WeatherContext'

export function Logo() {
	const { isModalWindowActive } = useWeatherContext();

	return (
		<Link href={PAGES.HOME} className={cn({
				'pointer-events-none': isModalWindowActive
			},
			"flex items-center gap-2"
		)}>
			<div className={`w-7 h-7 relative`}>
				<Image
					src="/images/x-black.svg"
					alt="x.com"
					fill
					priority
				/>
			</div>
		</Link>
	);
}
