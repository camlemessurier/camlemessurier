import { Box, Heading } from "@chakra-ui/react";

export const ContentSection = ({
	heading,
	children,
}: {
	heading: string;
	children: React.ReactNode;
}) => {
	return (
		<Box mb={18}>
			<Heading as='h2' size={"lg"} pb={8}>
				{heading}
			</Heading>

			{children}
		</Box>
	);
};
