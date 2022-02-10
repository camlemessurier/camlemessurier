import { Box, Heading } from '@chakra-ui/react';

export const Section = ({ heading, children }) => {
	return (
		<Box mb={25}>
			<Heading pb={8}>{heading}</Heading>

			{children}
		</Box>
	);
};
