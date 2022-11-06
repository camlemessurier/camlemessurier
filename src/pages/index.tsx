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
import { Container } from '../components/Container';
import { ContentItem } from '../components/ContentItem';
import { ContentSection } from '../components/ContentSection';
import { Hero } from '../components/Hero';
import { Sidebar } from '../components/Sidebar';
import { resumeContent } from '../content/resumeContent';
import { useFadeIn } from '../hooks/useFadeIn';

const Index = () => {
	const { colorMode } = useColorMode();
	const [isPrint] = useMediaQuery(['print']);
	const [fadeIn] = useFadeIn({ fadeInMilliseconds: 500 });

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
						<Hero title={resumeContent.heading} my={2} />
						<motion.div
							animate={{ width: 300 }}
							transition={{ delay: 0.5, duration: 1 }}
							style={{ width: '0px' }}
						>
							<Box p={1} bg='green.700' mb={8} />
						</motion.div>
					</Box>

					<Text mb={8} mt={2}>
						{resumeContent.mainText}
					</Text>

					{isPrint && <Box h={370}></Box>}
					<ContentSection heading='Employment'>
						{resumeContent.employment.map(({ title, timeText, listItem }) => (
							<ContentItem
								key={title}
								title={title}
								timePeriod={timeText}
								listItems={listItem}
							/>
						))}
					</ContentSection>

					{isPrint && <Box h={220}></Box>}
					<ContentSection heading='Education'>
						{resumeContent.education.map(({ title, listItems }) => (
							<ContentItem key={title} title={title} listItems={listItems} />
						))}
					</ContentSection>

					{isPrint && (
						<ContentSection heading='References'>
							{resumeContent.references.map(
								({ timePeriod, title, listItems }) => (
									<ContentItem
										key={title}
										title={title}
										timePeriod={timePeriod}
										listItems={listItems}
									/>
								)
							)}
						</ContentSection>
					)}

					{!isPrint && (
						<>
							<ContentSection heading='Skills'>
								<Wrap mb={10}>
									{resumeContent.tags.map((tag) => (
										<WrapItem key={tag}>
											<Badge size='lg' color={labelCol[colorMode]}>
												{tag}
											</Badge>
										</WrapItem>
									))}
								</Wrap>
							</ContentSection>

							<Box
								borderLeft='7px solid'
								borderLeftColor={labelCol[colorMode]}
								p={3}
								my={5}
								color={tipColor[colorMode]}
								bg={tipBgColor[colorMode]}
							>
								<Text fontWeight='500'>
									To toggle colour scheme, click on the &quot;CL&quot; icon
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
