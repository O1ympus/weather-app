import Image from 'next/image'

export default function Background() {
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
