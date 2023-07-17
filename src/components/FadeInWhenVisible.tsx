import { motion } from "framer-motion";
import React from "react";

export const FadeInWhenVisible = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};
