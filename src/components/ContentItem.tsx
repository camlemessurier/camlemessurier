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
	WrapItem,
	useColorMode,
} from "@chakra-ui/react";
import { EmploymentContent } from "../content/resumeContent";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const timePeriodColor = { light: "gray.700", dark: "grey.300" };
const highlight = { light: "gray.600", dark: "grey.300" };
const iconColor = { light: "gray.700", dark: "grey.200" };
const cardColor = { light: "white", dark: "gray.800" };
const tagColor = { light: "gray.200", dark: "gray.400" };

export const ContentItem = ({ title, achievements, blurb, technologies, timeText }: EmploymentContent) => {
	const { colorMode } = useColorMode();

	return (
		<FadeInWhenVisible>
			<Box
				mb={1}
				px={0}
				pt={4}
				pb={10}
				borderLeftColor={iconColor[colorMode]}
				bg={cardColor[colorMode]}
				sx={{ pageBreakInside: "avoid" }}
			>
				<Heading size='md' as={"h3"}>
					{title}
				</Heading>
				{timeText && (
					<Text
						fontWeight='600'
						fontSize='14'
						color={highlight[colorMode]}
						casing='capitalize'
					>
						{timeText}
					</Text>
				)}


				<Box>

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
							<Box pb={5}>
								<SubHeading>Technologies</SubHeading>
								<Wrap pt={3}>
									{technologies?.map((li) => (
										<WrapItem key={li}>
											<Tag>{li}</Tag>
										</WrapItem>
									))}
								</Wrap>
							</Box>
						</>
					)}

				</Box>

			</Box>
		</FadeInWhenVisible >
	);
};

const SubHeading = ({ children }: { children: React.ReactNode; }) => {
	const { colorMode } = useColorMode();

	return (
		<Heading as='h4' size='sm' mb={3} color={timePeriodColor[colorMode]}>
			{children}
		</Heading>
	);
};
