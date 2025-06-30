import type { Pokemon } from './pokemon';

export interface PokemonPageProps {
	data: {
		name: string;
		height: number;
		weight: number;
		types: Pokemon['types'];
		image: string;
	};
}
