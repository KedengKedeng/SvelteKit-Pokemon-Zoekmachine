export interface Pokemon {
	name: string;
	height: number;
	weight: number;
	sprites: {
		back_default: string;
		back_female?: string;
		back_shiny: string;
		back_shiny_female?: string;
		front_default: string;
		front_female?: string;
		front_shiny: string;
		front_shiny_female?: string;
	};
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
}
