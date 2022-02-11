import {
	Badge,
	Box,
	Flex,
	Text,
	useColorMode,
	useMediaQuery,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { Item } from '../components/Item';
import { Section } from '../components/Section';
import { Sidebar } from '../components/Sidebar';

const Index = () => {
	const { colorMode } = useColorMode();
	const [isPrint] = useMediaQuery(['print']);
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true);
		}, 500);
	}, []);

	const bgColor = { light: 'white', dark: 'green.900' };

	const color = { light: 'gray.700', dark: 'gray.100' };

	const tipColor = { light: 'gray.700', dark: 'gray.200' };
	const tipBgColor = { light: 'gray.100', dark: '' };

	const labelCol = { light: 'green.700', dark: 'gray.100' };

	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

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
				<meta
					name='google-site-verification'
					content='CgF_CClTUWgVQjHKNXKlfbJ34Ktz1OBfbn8R3nwJ_p8'
				/>
			</Head>

			<Sidebar />
			<motion.div
				animate={!fadeIn ? 'hidden' : 'visible'}
				transition={{ duration: 0.5 }}
				variants={variants}
				initial={false}
			>
				<Container>
					<Box
						pos={isPrint ? 'relative' : 'sticky'}
						pt={{ base: 0, md: 35 }}
						top={0}
						bgColor={bgColor[colorMode]}
					>
						<Hero title='Hello, welcome to my resume' my={2} />
						<motion.div
							animate={{ width: 300 }}
							transition={{ delay: 0.5, duration: 1 }}
							style={{ width: '0px' }}
						>
							<Box p={1} bg='green.700' mb={8} />
						</motion.div>
					</Box>

					<Text mb={8} mt={2}>
						Product driven junior software engineer, with 1.5+ years of
						professional experience. Well-versed in modern technology and
						engineering best practices with a strong background in computer
						science and mathematics. Loves to work as part of a team and
						share/listen to ideas to improve both product and team performance.
						Well-rounded and professional team player dedicated to continued
						learning and development.
					</Text>

					<Wrap mb={12}>
						<WrapItem>
							<Badge size='lg' color={labelCol[colorMode]}>
								UI/UX
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge size='lg' color={labelCol[colorMode]}>
								Clean Code
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge size='lg' color={labelCol[colorMode]}>
								Agile
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge size='lg' color={labelCol[colorMode]}>
								Full Stack
							</Badge>
						</WrapItem>
						<WrapItem>
							<Badge size='lg' color={labelCol[colorMode]}>
								Machine Learning
							</Badge>
						</WrapItem>
					</Wrap>

					{isPrint && <Box h={370}></Box>}
					<Section heading='Employment'>
						<Item
							title='Software Engineer, BodyMindLife Online (Startup), Newcastle'
							timePeriod='OCTOBER 2021 - PRESENT'
							listItems={[
								'Front end web developer collaborating on design, planning, implementation and automated testing of the BML Online Platform',
								'Worked as part of an agile team; sprints, backlog refinement and retrospectives',
								'Primary technologies included Next, Typescript, Apollo Client, Contentful, Tailwind, Cypress, Jest',
							]}
						/>
						<Item
							title='Software Engineer, Newton Green Technologies, Newcastle'
							timePeriod='FEBRUARY 2021 - SEPTEMBER 2021'
							listItems={[
								'Full stack web developer responsible for end-to-end web app development',
								'As a contractor, I worked on a wide range of projects, including Whistle (Lyrical Care), FeralScan, Breast Cancer Trials, ANZUP, TROG and others',
								'Primary technologies included Laravel, .NET, React and Wordpress',
							]}
						/>
						<Item
							title='Junior Developer / Acoustic Technician, Global Acoustics, Thornton'
							timePeriod='JULY 2019 - FEBRUARY 2021'
							listItems={[
								'Designed and implemented a full stack safety management tool (GA Forms), to transition the business from the existing paper system',
								'Technologies used include Next, Express, GraphQl, OAuth, Docker, NGINX, TypeORM, Chakra UI, and Gitlab',
								'Conducted sound power and environmental noise monitoring tests in accordance with relevant noise standards and criteria',
								'Report writing',
							]}
						/>
					</Section>

					{isPrint && <Box h={220}></Box>}
					<Section heading='Education'>
						<Item
							title='Bachelor of Computer Science (Data Science) / Mathematics (Statistics), University of Newcastle'
							timePeriod='FEBRUARY 2018 - PRESENT'
							listItems={[
								'Advanced databases, algorithms, system and network security, web development, predictive analytics, operating systems and human computer interaction, linear algebra, statistical inference, machine learning ',
								'Dr Robert M Sheahan Memorial Scholarship',
								'Work Integrated Learning project at startup venture FinishBy4 - Preact, Apollo, Webpack, Ruby on Rails',
								'Completed all but one course to fulfil the degree. Planning on finishing in semester 2, 2022',
							]}
						/>
						<Item
							title='High School Certificate, Taree High School'
							timePeriod='FEBRUARY 2011 - NOVEMBER 2017'
							listItems={['School Captain', '96.95 ATAR']}
						/>
					</Section>

					{isPrint && (
						<Section heading='References'>
							<Item
								title='Sahil Harriram, Tech Lead'
								timePeriod='BodyMindLife Online'
								listItems={['0434459255']}
							/>
							<Item
								title='Ben Harvey, Senior Engineer'
								timePeriod='BodyMindLife Online'
								listItems={['0432402447']}
							/>
							<Item
								title='Michael Newton, Newton Green Technologies'
								timePeriod='Director'
								listItems={['0432402447', 'newton@newtongreen.com']}
							/>
						</Section>
					)}

					{!isPrint && (
						<>
							<Section heading='Skills'>
								<Wrap mb={10}>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Typescript
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											React
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Next
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Express
										</Badge>
									</WrapItem>

									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											SQL
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Docker
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Git
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											R
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Tensorflow
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Go
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											CI/CD
										</Badge>
									</WrapItem>

									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											VSCode
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											Azure
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											REST
										</Badge>
									</WrapItem>
									<WrapItem>
										<Badge size='lg' color={labelCol[colorMode]}>
											GraphQL
										</Badge>
									</WrapItem>
								</Wrap>
							</Section>

							<Box
								borderLeft='7px solid'
								borderLeftColor={labelCol[colorMode]}
								p={3}
								my={5}
								color={tipColor[colorMode]}
								bg={tipBgColor[colorMode]}
							>
								<Text fontWeight='500'>
									To toggle colour scheme, click on the "CL" icon
								</Text>
							</Box>
						</>
					)}
				</Container>
			</motion.div>
		</Flex>
	);
};

export default Index;
