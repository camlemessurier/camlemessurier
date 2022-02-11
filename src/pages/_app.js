import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import '../styles.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', function () {
				navigator.serviceWorker.register('/sw.js');
			});
		}
	}, []);
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
