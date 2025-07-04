import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Pokemon } from '$lib/types/pokemon';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const response = await fetch(`/api/pokemon/${params.slug}`);
		const pokemon: Pokemon = await response.json();

		return {
			name: pokemon.name,
			height: pokemon.height,
			weight: pokemon.weight,
			types: pokemon.types,
			image: pokemon.sprites.front_default
		};
	} catch (e) {
		error(404, 'Pokemon not found');
	}
};
