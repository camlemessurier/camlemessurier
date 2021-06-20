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
} from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Sidebar } from '../components/Sidebar';
import { Section } from '../components/Section';
import { Item } from '../components/Item';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
		}, 1000);
	}, []);

	return (
		<Flex
			bgColor={bgColor[colorMode]}
			color={color[colorMode]}
			p='2vw'
			flexDirection={{ base: 'column', md: 'row' }}
		>
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
						<Badge variant='outline'>UI/UX</Badge>
						<Badge variant='outline'>Database Design</Badge>
						<Badge variant='outline'>Machine Learning</Badge>
						<Badge variant='outline'>SOLID</Badge>
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
							<Badge variant='outline'>Typescript</Badge>
							<Badge variant='outline'>React</Badge>
							<Badge variant='outline'>Next.js</Badge>
							<Badge variant='outline'>Node</Badge>
							<Badge variant='outline'>.NET</Badge>
							<Badge variant='outline'>SQL</Badge>
							<Badge variant='outline'>Docker</Badge>
							<Badge variant='outline'>Git</Badge>
							<Badge variant='outline'>CI/CD</Badge>
							<Badge variant='outline'>Keras</Badge>
							<Badge variant='outline'>VSCode</Badge>
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
