import React from 'react';
import ReactDOM from 'react-dom/client';

import ActiveSectionContextProvider from './contexts/ActiveSessionContext';

import Index from './Index';
import Header from './components/Header';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ActiveSectionContextProvider>
			<Header />
			<Index />
		</ActiveSectionContextProvider>
	</React.StrictMode>,
);
