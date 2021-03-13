<script>
	export let bus;
	export let name;
	let sunsetPhoto = '/familyPhotoSunset.jpg'
</script>

<main>
	<h1>For Sale: {bus}</h1>

	<img id="splash" src={sunsetPhoto} alt="Family sunset" >
	
	<h3>Asking $15,000.00</h3>

	<ul>
		<li>New battery (March 2021).</li>
		<li>Rebuilt brakes (June 2020).</li>
		<li>New rear drum brakes shoes.</li>
		<li>All new master cylinder.</li>
		<li>Two new brake fluid reservoirs (one in the cab, the other attached to the master cylinder).</li>
		<li>New spring kit installed rear brakes.</li>
		<li>New rear brake calipers</li>
		<li>1600cc Dual-port Dual Carb (Baby Webbers).</li>
		<li>Curtains are origally from an old college buddies 1972 VW Bus.</li>
		<li>Upholstery is in great condition.</li>
		<li>And lots lots more!!!</li>
	</ul>

	<div id="payment">
		<p>Serious inquiries only. Will not consider trades.</p>
		<p>Prefer payment in Bitcoin. Payment via bank transfer is also acceptable.</p>
	</div>

	<hr />

	<p>Below are a collection of photos of {name} </p>
	<div class="row">
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/torque+wrench.jpg" alt="repairing brakes" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Master+Cylinder.jpg" alt="New master cylinder" />
		<img class="column" src="" alt="" />
		<img class="column" src="" alt="" />
	</div>


	<div id='location'>
		<p>Donna currently resides in Oceanside, California</p>
	</div>

	<hr />

	<h2>If you have any questions please contact me using the form below.</h2>

	<form name="contact" data-netlify id="contact">
		<p>
			<label>Name <input type="text" name="name" /></label>
		</p>
		<p>
			<label>Email <input type="email" name="email" /></label>
		</p>
		<p>
			<label>Message <textarea name="message"></textarea></label>
		</p>
		<p>
			<button type="submit">Send</button>
		</p>
	</form>
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
		background-image: '/topo.svg';
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 150;
	}

	h2 {
		color:#ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 90;
	}

	h3 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	ul {
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

	#splash {
		max-width: 750px;
		border-radius: 50px;
	}

	#payment {
		font-style: italic;
	}
	 #location {
		text-align: center;
	 }

	 #contact {
		color:#ff3e00;
	 }

	 .column {
		max-width: 250px;
		border-radius: 20px;
		float: left;
		width: 33.33%;
		padding: 5px;
		transition: transform 0.25s ease;
	}

	.row::after {
		content: "";
		clear: both;
		display: table;
	}

	.row > img:hover {
		-webkit-transform: scale(3);
		transform: scale(3);
	}

</style>