import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
export default {
	kit: {
		adapter: adapter({
			// dont ask - github pages weird thing
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true,
			
		})
	},
	preprocess: preprocess({})
};