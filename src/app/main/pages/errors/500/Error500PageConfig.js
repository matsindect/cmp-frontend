import React from 'react';

const Error500PageConfig = [
	{
		path: '/pages/errors/error-500',
		component: React.lazy(() => import('./Error500Page'))
	}
]

export default Error500PageConfig;
