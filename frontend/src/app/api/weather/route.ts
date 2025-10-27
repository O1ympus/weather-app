export async function GET(req: Request) {
	const {searchParams} = new URL(req.url);
	
	const lat = searchParams.get('lat');
	const lon = searchParams.get('lon');
	
	if (!lat || !lon) {
		return Response.json(
			{ error: 'Latitude and longitude are required' },
			{ status: 400 }
		)
	}
	
	try {
		const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m`);
		const data = await res.json();
		
		const current = data.current_weather;
		const today = new Date().toISOString().split('T')[0];
		
		const tempsToday: number[] = data.hourly.time
			.map((time: string, idx: number) =>
				time.startsWith(today) ? data.hourly.temperature_2m[idx] : null
			)
			.filter((t: number | null) => t !== null);
		
		const temperature = Math.round(current.temperature);
		const lowestTemperature = Math.round(Math.min(...tempsToday));
		const highestTemperature = Math.round(Math.max(...tempsToday));
		
		const simplified = {
			icon: current.weathercode,
			currentTemperature: temperature,
			lowestTemperature,
			highestTemperature
		};
		
		return Response.json(simplified);
	} catch {
		return Response.json(
			{ error: 'Failed to fetch weather data' },
			{ status: 500 }
		)
	}
}
