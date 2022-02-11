import { Heading, useColorMode } from '@chakra-ui/react';

export const Hero = ({ title, ...props }) => {
	const { colorMode } = useColorMode();

	const color = { light: 'gray.700', dark: 'white' };

	return (
		<Heading
			fontSize={{ base: '34px', md: '50px', xl: '3vw' }}
			color={color[colorMode]}
			{...props}
		>
			{title}
		</Heading>
	);
};

Hero.defaultProps = {
	title: 'Hello, Welcome to my resume',
};
