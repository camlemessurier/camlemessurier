import {
	Box,
	Flex,
	Heading,
	Text,
	VisuallyHidden,
	useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Container } from "../components/Container";
import { ContentItem } from "../components/ContentItem";
import { ContentSection } from "../components/ContentSection";
import { Hero } from "../components/Hero";
import { Sidebar } from "../components/Sidebar";
import { resumeContent } from "../content/resumeContent";
import { useFadeIn } from "../hooks/useFadeIn";

const Index = () => {
	const { colorMode } = useColorMode();
	const [fadeIn] = useFadeIn({ fadeInMilliseconds: 500 });

	const bgColor = { light: "white", dark: "green.900" };

	const color = { light: "gray.700", dark: "gray.100" };

	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	return (
		<Flex
			bgColor={bgColor[colorMode]}
			color={color[colorMode]}
			p='2vw'
			flexDirection={{ base: "column", lg: "row" }}
		>
			<Head>
				<title>Cam Le Messurier</title>

				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content='Resume for Cam Le Messurier.' />
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
				animate={!fadeIn ? "hidden" : "visible"}
				transition={{ duration: 0.5 }}
				variants={variants}
				initial={false}
			>
				<Container>
					<Box
						pos={"sticky"}
						pt={{ base: 0, lg: 35 }}
						top={0}
						bgColor={bgColor[colorMode]}
						zIndex='100'
					>
						<Hero title={resumeContent.heading} my={2} />
						<VisuallyHidden>
							<Heading>Cam Le Messurier</Heading>
						</VisuallyHidden>
						<motion.div
							animate={{ width: 300 }}
							transition={{ delay: 0.5, duration: 1 }}
							style={{ width: "0px" }}
						>
							<Box p={1} bg='green.700' mb={8} />
						</motion.div>
					</Box>

					<Box mb={6}>
						{resumeContent.mainText.map(v => (
							<Text
								key={v}
								mb={6}
								mt={2}
							>
								{v}
							</Text>
						))}
					</Box>



					<ContentSection heading='Employment'>
						{resumeContent.employment.map(
							({ title, timeText, achievements, technologies, blurb }) => (
								<ContentItem
									key={title}
									title={title}
									blurb={blurb}
									timePeriod={timeText}
									achievements={achievements}
									technologies={technologies}
								/>
							)
						)}
					</ContentSection>

					<ContentSection heading='Education'>
						{resumeContent.education.map(({ title, achievements, blurb }) => (
							<ContentItem
								key={title}
								title={title}
								achievements={achievements}
								blurb={blurb}
							/>
						))}
					</ContentSection>
				</Container>
			</motion.div>
		</Flex>
	);
};

export default Index;
