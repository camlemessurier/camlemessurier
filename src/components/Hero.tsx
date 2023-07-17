import { Heading, HeadingProps, useColorMode } from "@chakra-ui/react";

export const Hero = ({
	title = "Hello, Welcome to my resume",
	...props
}: { title: string } & HeadingProps) => {
	const { colorMode } = useColorMode();

	const color = { light: "gray.700", dark: "white" };

	return (
		<Heading
			fontSize={{ base: "34px", md: "40px", xl: "2.5vw" }}
			color={color[colorMode]}
			{...props}
		>
			{title}
		</Heading>
	);
};
