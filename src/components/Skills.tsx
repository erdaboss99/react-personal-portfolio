import { motion } from 'framer-motion';

import useSectionInView from '../hooks/useSectionInView';

import SectionHeader from './SectionHeader';

import { SKILLS_DATA } from '../lib/data';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView('Skills');

	return (
		<section
			id='skills'
			ref={ref}
			className='mt-[10rem] h-fit min-h-screen max-w-[50rem] scroll-mt-[1rem] text-center sm:mt-[8rem] sm:scroll-mt-[8rem]'>
			<SectionHeader>My skills</SectionHeader>
			<ul className='flex flex-wrap justify-center gap-2 text-lg text-primary-light dark:text-primary-dark'>
				{SKILLS_DATA.map((skill, index) => (
					<motion.li
						key={index}
						className='rounded-xl border border-border-light bg-background-secondary-light px-5 py-3 dark:border-border-dark dark:bg-background-secondary-dark'
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{
							once: false,
						}}
						custom={index}>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
