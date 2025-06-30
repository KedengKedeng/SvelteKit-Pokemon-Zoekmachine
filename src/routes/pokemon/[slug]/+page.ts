import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Pokemon } from '$lib/types/pokemon';
import type { PokemonPageProps } from '$lib/types/PokemonPageProps';

export const load: PageLoad = async ({ params }) => {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
		const pokemon: Pokemon = await response.json();

		return {
			name: pokemon.name,
			height: pokemon.height,
			weight: pokemon.weight,
			types: pokemon.types,
			image: pokemon.sprites.front_default
		} satisfies PokemonPageProps["data"];
	} catch (e) {
		error(404, 'Pokemon not found');
	}
};
