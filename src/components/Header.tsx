import { motion } from 'framer-motion';

import useActiveSectionContext from '../hooks/useActiveSectionContext';

import { LINKS } from '../lib/data';

const Header = () => {
	const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
	return (
		<header className='relative z-[999]'>
			<motion.div
				className='fixed bottom-0 left-1/2 h-[3.5rem] w-full rounded-none border border-border-light bg-background-header-light bg-opacity-30 shadow-2xl backdrop-blur-[0.5rem] dark:border-border-dark dark:bg-background-header-dark dark:bg-opacity-75 sm:top-3 sm:h-[3.25rem] sm:w-[57.5rem] sm:rounded-2xl'
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}></motion.div>

			<nav className='fixed bottom-[0.25rem] left-1/2 flex h-12 w-full -translate-x-1/2 py-2 sm:top-[0.9rem] sm:h-12 sm:w-[initial] sm:py-0'>
				<ul className='flex w-full items-center justify-evenly gap-1 text-[0.9rem] sm:w-[57.5rem] sm:flex-nowrap sm:gap-5'>
					{LINKS.map((link, index) => (
						<motion.li
							key={index}
							className='relative flex h-3/4 items-center justify-center'
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: (index + 1) * 0.18 }}>
							<a
								className='flex w-full items-center justify-center px-3 py-3 text-secondary-light transition hover:text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark'
								href={'/' + link.anchor}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}>
								{link.name}

								{link.name === activeSection && (
									<motion.span
										className='absolute inset-0 -z-10 rounded-lg bg-background-accent-light dark:bg-background-accent-dark'
										layoutId='activeSection'
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}></motion.span>
								)}
							</a>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
