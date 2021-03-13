<script>
	export let bus;
	export let name;
	let sunsetPhoto = '/familyPhotoSunset.jpg'
</script>

<main>
	<h1>For Sale: {bus}</h1>

	<img src={sunsetPhoto} alt="Family sunset" >
	
	<h3>Asking $15,000.00</h3>

	<ul>
		<li>New battery (March 2021).</li>
		<li>Rebuilt brakes (June 2020).</li>
		<li>New brakes shoes (rear).</li>
		<li>All new master cylinder.</li>
		<li>Two new brake fluid reservoirs (one in the cab, the other attached to the master cylinder).</li>
		<li>New spring kit installed rear brakes.</li>
		<li>New </li>
		<li>1600cc Dual-port Dual Carb (Baby Webbers).</li>
		<li>Curtains are origally from an old college buddies 1972 VW Bus.</li>
		<li>Upholstery is in great condition.</li>
		<li>And lots lots more!!!</li>
	</ul>

	<div id="payment">
		<p>Serious inquiries only. Will not consider trades.</p>
		<p>Prefer payment in Bitcoin. Secondary bank transfer.</p>
	</div>

	<p>Below are a collection of photos of {name} </p>
	<gallery>
		<img src="" alt="" />
		<img src="" alt="" />
		<img src="" alt="" />
		<img src="" alt="" />
	</gallery>
</main>

<div id='location'>
	<p>Oceanside, California (92058)</p>
</div>

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
		background-image: '/topo.svg';
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

	img {
		max-width: 750px;
		border-radius: 50px;
	}

	ul {
		text-align: left;
	}
	#payment {
		text-align: right;
	}
	 #location {
		text-align: center;
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