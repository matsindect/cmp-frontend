import GeneralSearch from './general'
import ProductSearch from './products-search'

const SearchConfig = [
	{
		path: '/search',
		component: GeneralSearch,
	},
	{
		path: '/products',
		component: ProductSearch,
	}
]

export default SearchConfig;
