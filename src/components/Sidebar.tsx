import {
	Box,
	HStack,
	Icon,
	Link,
	Text,
	VStack
} from "@chakra-ui/react";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

export const Sidebar = () => {

	return (
		<VStack pb={10}>
			<Box>
				<Text fontSize={70} fontWeight='700' mb={2} textAlign='center'>
					Cam Le Messurier
				</Text>
			</Box>
			<Box>
				<HStack spacing={30}>
					<Link
						href='https://github.com/camlemessurier'
						aria-label='Github'
						isExternal
					>
						<Icon as={VscGithubInverted} w={12} h={12} />
					</Link>
					<Link
						href='https://www.linkedin.com/in/camlemessurier/'
						aria-label='LinkedIn'
						isExternal
					>
						<Icon as={SiLinkedin} w={12} h={12} />
					</Link>
					<Link
						href='mailto:camlemessurier@gmail.com'
						aria-label='Email'
						isExternal
					>
						<Icon as={MdEmail} w={55} h={55} />
					</Link>
					<Link href='/Resume.pdf' aria-label='Resume' isExternal>
						<Icon as={BsFileEarmarkTextFill} w={12} h={12} />
					</Link>
				</HStack>
			</Box>

		</VStack>



	);
};
