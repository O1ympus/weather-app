interface Props {
	dayName: string,
	finalDate: string ,
}

export default function DateComponent({dayName, finalDate}: Props) {
	return (
		<div className={`text-white flex justify-between w-full text-lg sm:flex-col
			sm:w-auto items-start sm:text-2xl xl:text-4xl xl:leading-13
		`}>
			<span className={`font-medium block`}>{dayName}</span>
			<span className={`font-thin block`}>{finalDate}</span>
		</div>
	);
}
