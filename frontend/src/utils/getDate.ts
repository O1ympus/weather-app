export function getDate() {
	const today = new Date()
	
	const dayName = today.toLocaleDateString('en-US', { weekday: 'long' })
	const formattedDate = today.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).replace(',', '')
	
	const finalDate = formattedDate.replace(' ', ',');
	
	return [dayName, finalDate];
}
