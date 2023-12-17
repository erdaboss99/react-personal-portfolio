import { motion } from 'framer-motion';

import useSectionInView from '../hooks/useSectionInView';

import SectionHeader from './SectionHeader';

import AboutMe from '../content/AboutMe.mdx';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className={
				'mt-[1rem] h-fit min-h-screen max-w-[50rem] scroll-mt-[1rem] text-center text-sm !leading-8 sm:scroll-mt-[8rem] sm:text-lg'
			}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.9, duration: 0.5 }}
			id='about'>
			<SectionHeader>About me</SectionHeader>
			<div className='mb-3'>
				<AboutMe />
			</div>
		</motion.section>
	);
}
