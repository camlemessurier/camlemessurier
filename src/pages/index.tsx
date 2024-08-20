import {
	Flex
} from "@chakra-ui/react";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";

const Index = () => {


	return (
		<Flex
			bgColor={"green.800"}
			color={"white"}
			height={"100vh"}
			w={"100%"}
			justifyContent='center'
			alignItems='center'
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

		</Flex>
	);
};

export default Index;
