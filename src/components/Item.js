import { ChevronRightIcon } from '@chakra-ui/icons';
import {
	Box,
	Heading,
	List,
	ListIcon,
	ListItem,
	Text,
	useColorMode,
} from '@chakra-ui/react';

export const Item = ({ title, timePeriod, listItems }) => {
	const { colorMode } = useColorMode();

	const timePeriodColor = { light: 'gray.700', dark: 'grey.300' };
	const iconColor = { light: 'green.700', dark: 'grey.200' };
	const cardColor = { light: '', dark: 'rgba(0, 0, 0, 0.15)' };
	const border = { light: '1px', dark: '' };

	return (
		<Box
			mb={8}
			p={4}
			pl={7}
			// rounded={'md'}
			// borderWidth={border[colorMode]}
			borderLeft='7px solid'
			borderLeftColor={iconColor[colorMode]}
			bg={cardColor[colorMode]}
			// shadow='md'
		>
			<Heading size='md'>{title}</Heading>
			<Text
				fontWeight='600'
				fontSize='14'
				color={timePeriodColor[colorMode]}
				mb={2}
			>
				{timePeriod}
			</Text>
			<List spacing={1}>
				{listItems &&
					listItems.length > 0 &&
					listItems.map((li) => (
						<ListItem key={li}>
							<ListIcon as={ChevronRightIcon} color={iconColor[colorMode]} />
							{li}
						</ListItem>
					))}
			</List>
		</Box>
	);
};
