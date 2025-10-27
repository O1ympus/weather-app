import Image from 'next/image'
import {ILocation} from '../types/Location'

interface Props {
	location: ILocation
}

export default function CurrentLocation({location}: Props) {
	return (
		<div className={`bg-[#363636]/50 py-[9px] px-4 gap-2 rounded-2xl h-fit
			w-full flex items-center justify-center mb-4 sm:w-auto sm:flex-row
		`}>
			<div className="relative w-[14px] h-[14px] sm:w-[22px] sm:h-[22px]">
				<Image
					src="images/location.svg"
					fill
					alt='location'
				/>
			</div>
			<span className={`text-white text-xs sm:text-lg xl:text-3xl`}>
				{location.country}, {location.city}
			</span>
		</div>
	);
}
