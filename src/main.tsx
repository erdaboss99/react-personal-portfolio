import React from 'react';
import ReactDOM from 'react-dom/client';

import ActiveSectionContextProvider from './contexts/ActiveSessionContext';

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ActiveSectionContextProvider>
			<Header />
			<main className='no-scrollbar flex h-full flex-col items-center px-4'>
				<Home />
				<About />
				<Projects />
				<Skills />
			</main>
			<Footer />
		</ActiveSectionContextProvider>
	</React.StrictMode>,
);
