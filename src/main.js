import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		bus: '1969 Volkswagen Type Two (Camper)',
		name: 'Donna a.k.a. The Champ'
	}
});

export default app;