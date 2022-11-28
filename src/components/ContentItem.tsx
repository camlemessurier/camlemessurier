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
import { FadeInWhenVisible } from './FadeInWhenVisible';

export const ContentItem = ({
	title,
	timePeriod,
	listItems,
}: {
	title: string;
	listItems: string[];
	timePeriod?: string;
}) => {
	const { colorMode } = useColorMode();

	const timePeriodColor = { light: 'gray.700', dark: 'grey.300' };
	const iconColor = { light: 'green.700', dark: 'grey.200' };
	const cardColor = { light: 'white', dark: 'rgba(0, 0, 0, 0.15)' };

	return (
		<FadeInWhenVisible>
			<Box
				mb={8}
				p={4}
				pl={7}
				borderLeft='7px solid'
				borderLeftColor={iconColor[colorMode]}
				bg={cardColor[colorMode]}
			>
				<Heading size='md'>{title}</Heading>
				{timePeriod && (
					<Text
						fontWeight='600'
						fontSize='14'
						color={timePeriodColor[colorMode]}
						mb={2}
					>
						{timePeriod}
					</Text>
				)}
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
		</FadeInWhenVisible>
	);
};
