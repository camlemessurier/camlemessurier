import {
	Link as ChakraLink,
	Text,
	Code,
	List,
	ListIcon,
	ListItem,
	Flex,
	Heading,
	Stack,
	Badge,
	Box,
	Divider,
} from '@chakra-ui/react';

export const Section = ({ heading, children }) => {
	return (
		<Box mb={25}>
			<Heading pb={3}>{heading}</Heading>

			{children}
		</Box>
	);
};
