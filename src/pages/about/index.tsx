import styles from './styles.module.css';

import Head from 'next/head';
import Image from 'next/image';

export default function About() {
	return (
		<>
			<Head>
				<title>Sobre</title>
			</Head>
			<div className={styles.img_container}>
				<h1>Sobre o projeto</h1>
				<Image
					src="/images/charizard.png"
					width="300"
					height="300"
					alt="Charizard"
				/>
				<p>Esse site foi feito em Next.js junto com Typescript</p>
			</div>
		</>
	);
}
