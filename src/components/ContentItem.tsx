import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Heading,
	List,
	ListIcon,
	ListItem,
	Tag,
	Text,
	Wrap,
	useColorMode,
} from "@chakra-ui/react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const timePeriodColor = { light: "gray.700", dark: "grey.300" };
const iconColor = { light: "green.700", dark: "grey.200" };
const cardColor = { light: "white", dark: "rgba(0, 0, 0, 0.15)" };

export const ContentItem = ({
	title,
	timePeriod,
	achievements,
	blurb,
	technologies,
}: {
	title: string;
	technologies?: string[];
	achievements?: string[];
	blurb?: string;
	timePeriod?: string;
}) => {
	const { colorMode } = useColorMode();

	return (
		<FadeInWhenVisible>
			<Box
				mb={12}
				px={7}
				py={4}
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
						casing='capitalize'
					>
						{timePeriod}
					</Text>
				)}
				<Text mt={3}>{blurb}</Text>

				{!!achievements && (
					<>
						<br></br>
						<Box>
							<SubHeading>Highlights</SubHeading>
							<List spacing={1}>
								{achievements?.map((li) => (
									<ListItem key={li} listStylePos={"outside"}>
										<Flex>
											<Box>
												<ListIcon
													as={ChevronRightIcon}
													color={iconColor[colorMode]}
												/>
											</Box>
											{li}
										</Flex>
									</ListItem>
								))}
							</List>
						</Box>
					</>
				)}

				{technologies && (
					<>
						<br></br>
						<Box>
							<SubHeading>Technologies</SubHeading>
							<Wrap>
								{technologies?.map((li) => (
									<Tag key={li}>{li}</Tag>
								))}
							</Wrap>
						</Box>
					</>
				)}
			</Box>
		</FadeInWhenVisible>
	);
};

const SubHeading = ({ children }: { children: React.ReactNode }) => {
	const { colorMode } = useColorMode();

	return (
		<Heading as='h4' size='sm' mb={3} color={timePeriodColor[colorMode]}>
			{children}
		</Heading>
	);
};
