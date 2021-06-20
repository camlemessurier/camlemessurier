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
	useColorMode,
	Box,
	Wrap,
	Fade,
	useTimeout,
	WrapItem,
} from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Sidebar } from '../components/Sidebar';
import { Section } from '../components/Section';
import { Item } from '../components/Item';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const Index = () => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'gray.50', dark: 'green.900' };

	const color = { light: 'gray.700', dark: 'gray.100' };

	const tipColor = { light: 'gray.700', dark: 'gray.200' };
	const tipBgColor = { light: 'gray.100', dark: '' };

	const [fadeIn, setFadeIn] = useState(false);

	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true);
		}, 500);
	}, []);

	return (
		<Flex
			bgColor={bgColor[colorMode]}
			color={color[colorMode]}
			p='2vw'
			flexDirection={{ base: 'column', md: 'row' }}
		>
			<Head>
				<title>Cam Le Messurier</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta
					name='description'
					content='Junior Developer Resume for Cam Le Messurier.'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='theme-color' content='#276749' />
			</Head>
			<Sidebar />
			<motion.div
				animate={!fadeIn ? 'hidden' : 'visible'}
				transition={{ duration: 0.5 }}
				variants={variants}
				initial={false}
			>
				<Container>
					<Hero title='Hello, Welcome to my resume' mb={1} />
					<motion.div animate={{ width: 300 }}>
						<Box p={1} bg='green.700' mb={6} />
					</motion.div>

					<Text mb={50}>
						Self motivated junior developer, looking for further development
						experience. Proficient in various platforms, languages, and
						engineering practices. Able to effectively self-manage during
						independent projects, as well as collaborate as part of a productive
						team. Well-rounded and professional team player dedicated to
						continued learning and development.
					</Text>

					<Wrap mb={10}>
						<WrapItem>
							<Badge size='lg' color='green.800'>
								UI/UX
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge size='lg' color='green.800'>
								Database Design
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge size='lg' color='green.800'>
								Machine Learning
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge size='lg' color='green.800'>
								SOLID
							</Badge>
						</WrapItem>
					</Wrap>

					<Section heading='Employment'>
						<Item
							title='Software Engineer, Newton Green Technologies, Newcastle'
							timePeriod='FEBRUARY 2021 - PRESENT'
							listItems={[
								'Work on a variety of projects, developing both consumer facing websites and internal web applications for various businesses and organisations.',
								'Technologies used include React, .NET, TFS, Visual Studio and Wordpress.',
							]}
						/>
						<Item
							title='Junior Developer / Acoustic Technician, Global Acoustics, Thornton'
							timePeriod='JULY 2019 - FEBRUARY 2021'
							listItems={[
								'Designed and implemented a full stack safety management tool, to transition the business from the existing paper system',
								'Technologies used include React, Node, OAuth, Docker, and Gitlab',
								'Conducted sound power and environmental noise monitoring tests in accordance with relevant noise standards and criteria',
								'Data entry and reporting',
							]}
						/>
					</Section>

					<Section heading='Education'>
						<Item
							title='Bachelor of Computer Science / Mathematics, University of Newcastle'
							timePeriod='FEBRUARY 2018 - PRESENT'
							listItems={[
								'Currently completing my fourth and final year of my undergraduate degree',
								'Topics include: Linear algebra, calculus, statistical inference, machine learning, databases, algorithms, system and network security, web development, predictive analytics, operating systems and human computer interaction.',
							]}
						/>
						<Item
							title='High School Certificate, Taree High School'
							timePeriod='FEBRUARY 2011 - NOVEMBER 2017'
						/>
					</Section>

					<Section heading='Technologies'>
						<Wrap>
							<WrapItem>
								<Badge size='lg' size='lg' color='green.800'>
									Typescript
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									React
								</Badge>
								<Badge size='lg' color='green.800'>
									Next.js
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									Node
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									.NET
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									SQL
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									Docker
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									Git
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									CI/CD
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									Keras
								</Badge>
							</WrapItem>
							<WrapItem>
								<Badge size='lg' color='green.800'>
									VSCode
								</Badge>
							</WrapItem>
						</Wrap>
					</Section>

					<Box
						borderLeft='5px solid green'
						p={3}
						my={5}
						color={tipColor[colorMode]}
						bg={tipBgColor[colorMode]}
					>
						<Text fontWeight='500'>
							Hint: click on the CL icon in the sidebar
						</Text>
					</Box>
				</Container>
			</motion.div>
		</Flex>
	);
};

export default Index;
