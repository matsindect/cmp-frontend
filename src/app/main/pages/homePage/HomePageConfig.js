import React from 'react';

const HomePageConfig = {
	routes: [
		{
			path: '/',
			component: React.lazy(() => import('./index'))
		}
	]
};

export default HomePageConfig;
