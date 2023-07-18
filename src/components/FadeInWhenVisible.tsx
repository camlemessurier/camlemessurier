import { motion } from "framer-motion";
import React from "react";

export const FadeInWhenVisible = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			transition={{ duration: 1 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			{children}
		</motion.div>
	);
};
