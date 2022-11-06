import { Heading, HeadingProps, useColorMode } from '@chakra-ui/react';

export const Hero = ({
	title = 'Hello, Welcome to my resume',
	...props
}: { title: string } & HeadingProps) => {
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
