import { Box, Heading } from '@chakra-ui/react';

export const Section = ({ heading, children }) => {
	return (
		<Box mb={18}>
			<Heading pb={8}>{heading}</Heading>

			{children}
		</Box>
	);
};
