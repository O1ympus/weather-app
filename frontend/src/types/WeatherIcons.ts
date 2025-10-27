interface WeatherIcons {
	[code: number]: string,
}

const weatherIcons: WeatherIcons = {
	0: 'sunny.svg',
	1: 'sunny-cloudy.svg',
	2: 'cloudy.svg',
	3: 'cloudy.svg',
	45: 'cloudy.svg',
	48: 'cloudy.svg',
	51: 'cloudy-rainy.svg',
	53: 'cloudy-rainy.svg',
	55: 'cloudy-rainy.svg',
	61: 'rain.svg',
	63: 'rain.svg',
	65: 'rain.svg',
	71: 'heavy-rain-storm.svg',
	73: 'heavy-rain-storm.svg',
	75: 'heavy-rain-storm.svg',
	95: 'thunder.svg',
	96: 'thunder.svg',
	99: 'thunder.svg',
}

export function getWeatherIcon(code: number) {
	return weatherIcons[code] || 'sunny.svg'
}
