import { Flex, useColorMode } from '@chakra-ui/react';

export const Container = (props) => {
	const { colorMode } = useColorMode();

	return (
		<Flex
			direction='column'
			justifyContent='flex-start'
			px={{ base: '2vw', md: '5vw' }}
			py={{ base: '20px', md: '2vw' }}
			maxWidth={1300}
			borderRadius={20}
			{...props}
		/>
	);
};
