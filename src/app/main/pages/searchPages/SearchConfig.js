import React from 'react';

const SearchConfig = {
	routes: [
		{
			path: '/search',
			component: React.lazy(() => import('./general'))
		},
		{
			path: '/products',
			component: React.lazy(() => import('./products-search'))
		}
	]
};

export default SearchConfig;
