import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import useActiveSectionContext from '../hooks/useActiveSectionContext';

import type { SectionName } from '../lib/types';

const useSectionInView = (sectionName: SectionName, threshold: number = 0.8) => {
	const { ref, inView } = useInView({ threshold });
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection(sectionName);
	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

	return {
		ref,
		inView,
	};
};

export default useSectionInView;
