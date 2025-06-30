export async function GET({ params }) {
	return await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
}
