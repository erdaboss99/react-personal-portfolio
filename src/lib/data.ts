import deva_appointment from '../assets/deva_appointment.png';

export const LINKS = [
	{ name: 'Home', anchor: '#home' },
	{ name: 'About', anchor: '#about' },
	{ name: 'Projects', anchor: '#projects' },
	{ name: 'Skills', anchor: '#skills' },
	{ name: 'Experience', anchor: '#experience' },
] as const;

export const PROJECTS_DATA = [
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
