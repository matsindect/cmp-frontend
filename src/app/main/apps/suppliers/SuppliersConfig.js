import React from 'react';

const SearchConfig = {
	routes: [
		{
			path: '/suppliers',
			component: React.lazy(() => import('./supplier'))
		}
	]
};

export default SearchConfig;