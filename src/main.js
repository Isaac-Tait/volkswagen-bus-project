import App from './App.svelte';

// const api = 'https://apiv2.bitcoinaverage.com/indices/local/ticker/short?crypto=BTC&fiat=USD'
// $.get(api, p => {
//   document.querySelector('pre').textContent = JSON.stringify(p, null, 2)
// }); 

// bitcoin: conversion = () => {
// 	return (p.BTCUSD.ask * 15000
// 	)}

const app = new App({
	target: document.body,
	props: {
		bus: '1969 Volkswagen Type Two (Camper)',
		name: 'Donna a.k.a. The Champ',
	}
});

export default app;