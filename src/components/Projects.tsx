import React from 'react';

import useSectionInView from '../hooks/useSectionInView';

import Project from './Project';
import SectonHeader from './SectionHeader';

import { PROJECTS_DATA } from '../lib/data';

export default function Projects() {
	const { ref } = useSectionInView('Projects');
	return (
		<section
			ref={ref}
			id='projects'
			className='mt-[1rem] h-fit min-h-screen max-w-[50rem] scroll-mt-[1rem] text-center sm:scroll-mt-[8rem]'>
			<SectonHeader>My projects</SectonHeader>
			<div>
				{PROJECTS_DATA.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
