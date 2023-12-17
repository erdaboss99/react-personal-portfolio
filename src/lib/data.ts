import React from 'react';

import { Briefcase, GraduationCap, PhoneIncoming, Rocket } from 'lucide-react';

import deva_appointment from '../assets/deva_appointment.png';
import personal_website from '../assets/personal_website.png';

export const LINKS = [
	{ name: 'Home', anchor: '#home' },
	{ name: 'About', anchor: '#about' },
	{ name: 'Projects', anchor: '#projects' },
	{ name: 'Skills', anchor: '#skills' },
	{ name: 'Experience', anchor: '#experience' },
] as const;

export const PROJECTS_DATA = [
	{
		title: 'Personal Website',
		description:
			'I created my personal portfolio website to showcase my projects and skills. This website has been developed using React, styled seamlessly using TailwindCSS, and enhanced with smooth animations powered by Framer-Motion. I utilized Vite to bundle the application and deployed it via Vercel.',
		tags: ['React', 'TailwindCSS', 'Vite', 'Framer-Motion', 'Vercel'],
		imageUrl: personal_website,
		imageAlt: 'Screenshot of the Personal Portfolio Website',
		deployUrl: 'https://erdelyiroland.com',
	},
	{
		title: 'Deva Appointment',
		description:
			'I developed a web-based appointment booking application tailored for a pharmacy setting. This application has been constructed utilizing Next.js and Tailwind CSS. The continuous integration and continuous deployment (CI/CD) processes are managed through GitHub Actions, and the automated tests have been scripted using Playwright.',
		tags: [
			'React',
			'Next.js',
			'PostgreSQL',
			'TailwindCSS',
			'Prisma',
			'Playwright',
			'GitHub Actions',
			'Vercel',
		],
		imageUrl: deva_appointment,
		imageAlt: 'Screenshot of the Deva Appointment Application',
		deployUrl: 'https://thesis.erdelyiroland.com',
	},
] as const;

export const SKILLS_DATA = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'Node.js',
	'React',
	'Next.js',
	'Playwright',
	'Git',
	'GitHub Actions',
	'Linux',
	'Python',
] as const;

export const EXPERIENCE_DATA = [
	{
		title: 'Computer Science Degree',
		facility: 'Eszterházy Károly Catholic University',
		location: 'Eger, HU',
		description:
			'At present, I am actively engaged in pursuing my undergraduate studies at the university, where I am dedicated to expanding my knowledge and skills in various academic disciplines.',
		date: '2020 - Present',
		icon: React.createElement(GraduationCap),
	},
	{
		title: 'Mandatory Internship',
		facility: 'QNSZT Kft.',
		location: 'Eger, HU',
		description:
			'My mandatory internship centered on a Laravel project. Engaged in front-end (Blade, HTML, CSS, JS) and back-end (Eloquent, routing, middleware) development. Collaborated within a team, conducted code reviews, and improved problem-solving abilities. Gained valuable insights into the entire software development life cycle.',
		date: '2022 Summer',
		icon: React.createElement(Rocket),
	},
	{
		title: 'Remote Customer Meeting Point Associate',
		facility: 'IKEA',
		location: 'Budapest, HU',
		description:
			'In the capacity of a Remote Customer Meeting Point Associate, I refined my communication proficiency and adeptness in swift problem-solving. Competently overseeing virtual interactions, I demonstrated adaptability and technical prowess in addressing diverse customer issues.',
		date: '2022 September - 2023 March',
		icon: React.createElement(PhoneIncoming),
	},
	{
		title: 'Test Automation Engineer Trainee',
		facility: 'Abesse Zrt.',
		location: 'Budapest, HU',
		description:
			'In conjunction with my academic pursuits, I am gaining practical experience as a trainee in test automation engineering. My current focus involves actively contributing to a test automation project utilizing Playwright and TypeScript.',
		date: '2023 - Present',
		icon: React.createElement(Briefcase),
	},
] as const;
