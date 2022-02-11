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
	useMediaQuery,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SiLinkedin } from 'react-icons/si';
import { TiLocationArrow, TiMail, TiPhone } from 'react-icons/ti';
import { VscGithubInverted } from 'react-icons/vsc';

export const Sidebar = (props) => {
	const [isPrint] = useMediaQuery(['print']);

	const bgColor = { light: 'green.800', dark: 'gray.50' };

	const color = { light: 'gray.50', dark: 'green.800' };

	const variants = {
		visible: { x: 0 },
		hidden: { x: -500 },
	};

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<motion.div
			variants={variants}
			initial='hidden'
			animate='visible'
			transition={{ duration: 0.5 }}
		>
			<Flex
				py={{ base: '30px', md: '5vw' }}
				w={{ base: '100%', md: '30vw' }}
				h={{ base: 'auto', md: 'calc(100vh - 4vw)' }}
				maxWidth={{ base: '', lg: '500px' }}
				flexDirection='column'
				justifyContent='space-between'
				alignItems='center'
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				borderRadius={20}
				position='sticky'
				overflow='hidden'
				top='2vw'
				shadow='md'
			>
				<Box>
					<Flex
						justifyContent='center'
						alignItems='center'
						flexDirection='column'
						mb='3vw'
					>
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

						<Text fontSize={30} fontWeight='600' mb={4} textAlign='center'>
							Cam Le Messurier
						</Text>
						<Box mb={4} h={0.5} w={100} bg={color[colorMode]} />
						<Text fontSize={20}>Junior Developer</Text>
					</Flex>

					<Box fontWeight='500'>
						<List>
							<ListItem>
								<ListIcon as={TiLocationArrow} />
								Newcastle, Australia
							</ListItem>

							<ListItem>
								<Link href='tel:0423886255' isExternal>
									<ListIcon as={TiPhone} />
									0423886255
								</Link>
							</ListItem>

							<ListItem>
								<Link href='mailto:camlemessurier@gmail.com' isExternal>
									<ListIcon as={TiMail} />
									camlemessurier@gmail.com
								</Link>
							</ListItem>
							{isPrint && (
								<>
									<ListItem>
										<Link href='https://github.com/camlemessurier' isExternal>
											<ListIcon as={VscGithubInverted} />
											github.com/camlemessurier
										</Link>
									</ListItem>

									<ListItem>
										<Link
											href='https://www.linkedin.com/in/camlemessurier/'
											isExternal
										>
											<ListIcon as={SiLinkedin} />
											linkedin.com/in/camlemessurier/
										</Link>
									</ListItem>
								</>
							)}
						</List>
					</Box>
				</Box>

				{!isPrint && (
					<Box mt={7}>
						<HStack spacing={30}>
							<Link
								href='https://github.com/camlemessurier'
								alt='Github'
								aria-label='Github'
								isExternal
							>
								<Icon as={VscGithubInverted} w={10} h={10} />
							</Link>
							<Link
								href='https://www.linkedin.com/in/camlemessurier/'
								alt='LinkedIn'
								aria-label='LinkedIn'
								isExternal
							>
								<Icon as={SiLinkedin} w={9} h={9} />
							</Link>
						</HStack>
					</Box>
				)}
			</Flex>
		</motion.div>
	);
};
