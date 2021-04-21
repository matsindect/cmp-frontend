import React from 'react';

const Error404PageConfig = [
	{
		path: '/error-404',
		component: React.lazy(() => import('./Error404Page'))
	}
]

export default Error404PageConfig;
