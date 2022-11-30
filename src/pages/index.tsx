import styles from '../styles/home.module.css';

import Image from 'next/image';

import Card from '../components/Card';

export async function getStaticProps() {
	const maxPokemons = 151;
	const api = 'https://pokeapi.co/api/v2/pokemon/';

	const res = await fetch(`${api}/?limit=${maxPokemons}`);
	const data = await res.json();

	data.results.forEach((item: { id: number }, index: number) => {
		item.id = index + 1;
	});

	return {
		props: { pokemons: data.results },
	};
}

export default function Home({ pokemons }: any) {
	return (
		<>
			<div className={styles.tittle_container}>
				<h1 className={styles.tittle}>
					Poké<span>dex</span>
				</h1>
				<Image
					src="/images/pokeball.png"
					width="50"
					height="50"
					alt="Pokédex"
				/>
			</div>
			<div className={styles.pokemon_container}>
				{pokemons.map((pokemon: any) => (
					<Card key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		</>
	);
}
