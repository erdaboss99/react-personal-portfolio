import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import useMediaQuery from '../hooks/useMediaQuery';
import useSectionInView from '../hooks/useSectionInView';

import SectionHeader from './SectionHeader';

import { EXPERIENCE_DATA } from '../lib/data';

const Experience = () => {
	const { ref, inView } = useSectionInView('Experience', 0.1);

	const matches = useMediaQuery('(prefers-color-scheme: light)');

	return (
		<section
			id='experience'
			ref={ref}
			className='mt-[1rem] h-fit max-w-[65rem] scroll-mt-[1rem] text-center sm:scroll-mt-[8rem]'>
			<SectionHeader>My experience</SectionHeader>
			<VerticalTimeline
				lineColor=''
				animate={true}>
				{EXPERIENCE_DATA.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							visible={inView}
							className={inView ? 'before:visible' : 'before:hidden'}
							contentStyle={{
								background: matches ? '#e2e8f0' : '#111827', // Slate 200 - Gray 900
								boxShadow: 'none',
								border: matches // Gray 300 - Gray 900
									? '2px solid #d1d5db'
									: '2px solid #111827',
								textAlign: 'left',
								padding: '2rem',
							}}
							contentArrowStyle={{
								borderRight: matches // Gray 300 - Gray 900
									? '0.7rem solid #d1d5db'
									: '0.7rem solid #111827',
							}}
							date={item.date}
							dateClassName='sm:!mx-5'
							icon={item.icon}
							iconStyle={{
								background: matches ? '#e2e8f0' : '#111827', // Slate 200 - Gray 900
								borderRadius: '10%',
								boxShadow: 'none',
								border: matches // Gray 300 - Gray 900
									? '3px solid #d1d5db'
									: '3px solid #111827',
							}}>
							<h3 className='font-semibold capitalize'>{item.title}</h3>
							<p className='!mt-1 font-normal'>
								{item.facility + ' - ' + item.location}
							</p>
							<p className='!mt-4 !font-normal text-secondary-light dark:text-secondary-dark'>
								{item.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
};

export default Experience;
