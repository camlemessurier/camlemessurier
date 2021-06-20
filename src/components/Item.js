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
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

export const Item = ({ title, timePeriod, listItems }) => {
	return (
		<Box mb={8}>
			<Heading size='md'>{title}</Heading>
			<Text fontWeight='600' fontSize='14' color='gray.500' mb={2}>
				{timePeriod}
			</Text>
			<List spacing={1}>
				{listItems &&
					listItems.length > 0 &&
					listItems.map((li) => (
						<ListItem key={li}>
							<ListIcon as={ChevronRightIcon} color='green.700' />
							{li}
						</ListItem>
					))}
			</List>
		</Box>
	);
};
