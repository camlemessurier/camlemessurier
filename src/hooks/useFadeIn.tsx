import { useEffect, useState } from 'react';

export type UseFadeInProps = {
	fadeInMilliseconds: number;
};

export const useFadeIn = ({ fadeInMilliseconds }: UseFadeInProps) => {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true);
		}, fadeInMilliseconds);
	}, [fadeInMilliseconds]);

	return [fadeIn];
};
