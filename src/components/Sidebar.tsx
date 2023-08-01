import {
	Box,
	Flex,
	HStack,
	Icon,
	Link,
	List,
	ListIcon,
	ListItem,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { TiPhone } from "react-icons/ti";
import { VscGithubInverted } from "react-icons/vsc";

export const Sidebar = () => {
	const bgColor = { light: "green.800", dark: "gray.50" };

	const color = { light: "gray.50", dark: "green.800" };

	const variants = {
		visible: { x: 0 },
		hidden: { x: -500 },
	};

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex
			py={{ base: "30px", lg: "5vw" }}
			w={{ base: "100%", lg: "30vw" }}
			h={{ base: "auto", lg: "calc(100vh - 4vw)" }}
			maxWidth={{ base: "", lg: "500px" }}
			minWidth={"300px"}
			flexDirection='column'
			justifyContent='space-between'
			alignItems='center'
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			borderRadius={20}
			position={{ base: "initial", lg: "sticky" }}
			overflow='hidden'
			top='2vw'
			shadow='md'
			p={4}
		>
			<Box>
				<Flex
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					mb='3vw'
				>
					<Box display={{ base: "none", lg: "initial" }}>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Flex
								borderRadius={4000}
								bgColor={color[colorMode]}
								color={bgColor[colorMode]}
								justifyContent='center'
								alignItems='center'
								h='5vw'
								w='5vw'
								mb='2vw'
								onClick={toggleColorMode}
								cursor='pointer'
								shadow='md'
							>
								<Text fontWeight='600' fontSize='2vw'>
									CL
								</Text>
							</Flex>
						</motion.button>
					</Box>

					<Text fontSize={30} fontWeight='600' mb={2} textAlign='center'>
						Cam Le Messurier
					</Text>
					<Text fontSize={18}>Software Engineer</Text>

					<br></br>
					<Box fontWeight='500'>
						<List spacing={1}>
							<ListItem>
								<Link href='tel:0423886255' isExternal>
									<ListIcon as={TiPhone} />
									0423886255
								</Link>
							</ListItem>

							<ListItem>
								<Link href='mailto:camlemessurier@gmail.com' isExternal>
									<ListIcon as={MdOutlineMailOutline} />
									camlemessurier@gmail.com
								</Link>
							</ListItem>
						</List>
					</Box>
				</Flex>
			</Box>

			<Box mt={7}>
				<HStack spacing={30}>
					<Link
						href='https://github.com/camlemessurier'
						aria-label='Github'
						isExternal
					>
						<Icon as={VscGithubInverted} w={10} h={10} />
					</Link>
					<Link
						href='https://www.linkedin.com/in/camlemessurier/'
						aria-label='LinkedIn'
						isExternal
					>
						<Icon as={SiLinkedin} w={9} h={9} />
					</Link>
					<Link href='/Resume.pdf' aria-label='Resume' isExternal>
						<Icon as={BsFileEarmarkTextFill} w={9} h={9} />
					</Link>
				</HStack>
			</Box>
		</Flex>
	);
};
