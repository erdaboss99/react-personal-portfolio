import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Index.tsx';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
