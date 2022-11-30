import Footer from '../Footer';
import NavBar from '../NavBar';

import Head from 'next/head';

export default function mainContainer({ children }: any) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<title>Pokédex</title>
			</Head>
			<NavBar />
			<main className="main_container">{children}</main>
			<Footer />
		</>
	);
}
