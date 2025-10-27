export async function GET(req: Request) {
	const {searchParams} = new URL(req.url);
	const results = searchParams.get('results') || '10';
	const res = await fetch(`https://randomuser.me/api/?results=${results}`);
	
	const data= await res.json();
	
	return Response.json(data);
}
