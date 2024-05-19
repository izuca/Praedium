import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import { Inria_Serif } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '@/components/footer';
import Providers from './providers';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
	variable: '--font-roboto',
});

const inria = Inria_Serif({
	weight: ['300', '400', '700'],
	subsets: ['latin'],
	variable: '--font-inria',
});

export const metadata = {
	title: 'PRAEDIUM',
	description: 'Imóveis Descomplicados',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${roboto.variable} ${inria.variable} font-sans scroll-smooth`}
		>
			<body className="bg-white-600 ">
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
