import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

export default function NavBar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Image
					src="/images/pokeball.png"
					width="30"
					height="30"
					alt="Pokédex"
				/>
				<h1>Pokédex</h1>
			</div>
			<ul className={styles.link_itens}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">Sobre</Link>
				</li>
			</ul>
		</nav>
	);
}
