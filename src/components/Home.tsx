import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

import useSectionInView from '../hooks/useSectionInView';

import Intro from '../content/Intro.mdx';

import portrait from '../assets/portrait.jpg';

const Home = () => {
	const { ref } = useSectionInView('Home');
	return (
		<section
			ref={ref}
			id='home'
			className='mt-[1rem] h-fit min-h-screen max-w-[50rem] scroll-mt-[8rem] text-center sm:mt-[7rem]'>
			<div className='flex items-center justify-center'>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'tween', duration: 0.5, delay: 0.1 }}>
					<img
						src={portrait}
						alt='Portrait picture of Erdélyi Roland'
						width='200'
						height='200'
						className='h-32 w-32 rounded-full border-[0.25rem] border-accent-light object-cover shadow-2xl dark:border-accent-dark'
					/>
				</motion.div>
			</div>

			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}>
				<Intro />
			</motion.h1>

			<motion.div
				className='flex flex-col items-center justify-center gap-8 px-4 text-lg font-medium sm:flex-row sm:gap-4'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}>
				<a
					href='mailto:mail@erdelyiroland.com'
					className='flex items-center gap-2 rounded-full bg-primary-light px-7 py-3 text-accent-light outline-none transition duration-300 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-primary-dark dark:text-accent-dark'>
					Contact me
					<Mail className='opacity-70' />
				</a>
				<div className='flex flex-row items-center justify-center gap-4 text-lg font-medium'>
					<a
						href='https://github.com/erdaboss99'
						target='_blank'
						className='text-primary flex items-center rounded-full border border-border-light bg-accent-light p-4 transition-all duration-200 hover:scale-110 hover:bg-primary-light hover:text-accent-light dark:border-border-dark dark:bg-accent-dark dark:hover:bg-primary-dark dark:hover:text-accent-dark'>
						<Github />
					</a>

					<a
						href='https://www.linkedin.com/in/roland-erdélyi-aa6256250/'
						target='_blank'
						className='text-primary flex items-center rounded-full border border-border-light bg-accent-light p-4 transition-all duration-200 hover:scale-110 hover:bg-primary-light hover:text-accent-light dark:border-border-dark dark:bg-accent-dark dark:hover:bg-primary-dark dark:hover:text-accent-dark'>
						<Linkedin />
					</a>

					<a
						href='https://twitter.com/erdaboss'
						target='_blank'
						className='text-primary flex items-center rounded-full border border-border-light bg-accent-light p-4 transition-all duration-200 hover:scale-110 hover:bg-primary-light hover:text-accent-light dark:border-border-dark dark:bg-accent-dark dark:hover:bg-primary-dark dark:hover:text-accent-dark'>
						<Twitter />
					</a>
				</div>
			</motion.div>
		</section>
	);
};

export default Home;
