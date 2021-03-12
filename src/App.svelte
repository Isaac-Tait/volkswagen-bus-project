<script>
	export let bus;
	export let name;
	let sunsetPhoto = ' ../photos/familyPhotoSunset.jpg'
</script>

<main>
	<h1>For Sale: {bus}</h1>

	<img src={sunsetPhoto} alt="Family photo sunset" >
	
	<ul>
		<li>New battery (March 2021)</li>
		<li>Rebuilt brakes (June 2020)</li>
		<li>New brakes shoes (rear)</li>
		<li>All new master cylinder and both brake fluid reservoirs</li>
		<li>New spring kit installed rear brakes</li>
		<li>1600cc Dual-port Dual Carb (Baby Webbers)</li>
	</ul>

	<h3>Asking $15,000.00</h3>

	<p>Below are a collection of photos of {name} </p>

	<p>Serious inquiries only. Will not consider trades.</p>

	<p>Prefer payment in Bitcoin. Secondary bank transfer.</p>

</main>

<footer>
	<div>
		<span>Another <a href="https://mountaintopcoding.com" target="_blank" rel="noopener noreferrer">mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span></a>); project.</span>
		<span>Built with <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte.js</a>.</span>	
	</div> 
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h3 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	footer {
		background-color: #ff3e00;
		font-size: 0.75em;
		font-style: italic;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>