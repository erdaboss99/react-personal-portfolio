import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { PROJECTS_DATA } from '../lib/data';
type ProjectProps = (typeof PROJECTS_DATA)[number];

export default function Project({ title, description, tags, imageUrl, imageAlt, deployUrl }: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 0.9', '1.33 1'],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			className='group mb-3 last:mb-0 sm:mb-8'
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}>
			<a
				href={deployUrl}
				target='_blank'>
				<section className='relative max-w-[44rem] overflow-hidden rounded-lg border border-border-light bg-background-secondary-light transition dark:border-border-dark dark:bg-background-secondary-dark sm:h-[32rem] sm:pr-8 sm:text-left sm:group-even:pl-4 sm:group-even:text-right'>
					<div className='flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem] sm:group-even:max-w-[54%]'>
						<h3 className='text-2xl font-medium'>{title}</h3>

						<p className='mt-2 leading-relaxed text-secondary-light dark:text-secondary-dark'>
							{description}
						</p>
						<ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto sm:group-even:justify-end'>
							{tags.map((tag, index) => (
								<li
									className='rounded-full bg-primary-light px-3 py-1 text-[0.7rem] uppercase tracking-wider text-accent-light dark:bg-primary-dark dark:text-accent-dark'
									key={index}>
									{tag}
								</li>
							))}
						</ul>
					</div>

					<img
						src={imageUrl}
						alt={imageAlt}
						className='absolute -right-40 top-8 hidden w-[28.5rem] rounded-t-lg shadow-2xl transition duration-300 group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-8 group-hover:translate-y-8 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-8 group-even:group-hover:translate-y-8 group-even:group-hover:rotate-2 sm:block'
					/>
				</section>
			</a>
		</motion.div>
	);
}
