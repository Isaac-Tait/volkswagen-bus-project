<script>
	export let bus;
	export let name;
	let sunsetPhoto = '/familyPhotoSunset.jpeg'
</script>

<main>
	<h1>For Sale: {bus}</h1>

	<img id="splash" src={sunsetPhoto} alt="Family sunset" >
	
	<h3>Asking $15,000.00</h3>

	<ul>
		<li>New battery (March 2021).</li>
		<li>Rebuilt brakes (June 2020).</li>
		<li>New rear drum brakes shoes.</li>
		<li>All new master cylinder..</li>
		<li>Two new brake fluid reservoirs (one in the cab, the other attached to the master cylinder).</li>
		<li>New spring kit installed on the rear brakes.</li>
		<li>New rear brake calipers</li>
		<li>Window rubber replaced in 2013 (still looking good as she was in storage with a car cover), metal work also completed to repair rust in the window well areas.</li>
		<li>Runs strong.</li>
		<li>Lights work but it is time to upgrade the sound system.</li>
		<li>Engine compartment hatch has a lock with VW logo key.</li>
		<li>Comes with a really cool hammock system that installs above the driver and passenger seats. Perfect for storing luggage out of the way at night or even a bed for a small child or two.</li>
		<li>1600cc Dual-port Dual Carb (Baby Webbers).</li>
		<li>Curtains are origally from an old college buddies 1972 VW Bus.</li>
		<li>Upholstery is in great condition.</li>
		<li>Comes with a loaded toolbox, timing light, and a slew of miscelaneous parts and pieces...</li>
		<li>I kept very detailed logs of repairs and driving mileage up until Donna went into storage. You can download the spreadsheat <a href="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/prof/Donna+Log.ods" target="_blank" rel="noopener noreferrer">here</a></li>
		<li>And lots lots more!!!</li>
	</ul>

	<div id="payment">
		<p>Serious inquiries only. Will not consider trades.</p>
		<p>Prefer payment in Bitcoin. Payment via bank transfer is also acceptable.</p>
	</div>

	<hr />

	<p>Below is a collection of photos of {name} spanning the years that she was a part of our family. From the deserts of western Utah to the backroads of California and beyond...</p>
	<div class="row">
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Donna+in+the+Mountains.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Artwork+Highway.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Dashboard.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/From+the+crag.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/High+Sierra+Campsite.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/I80+in+Utah.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Little+Cottonwood+Canyon.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Say+cheese.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Salt+Flats.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Gear.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/High+Sierra.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/1)+My+Bus+Pic+%232.jpg" alt="" />
	</div>
	<div class="row">
		<p>Photos taken during the recent brake job. You can read all about it on The Samba <a href="https://www.thesamba.com/vw/forum/viewtopic.php?p=9445749&highlight=#9445749" target="_blank" rel="noopener noreferrer">here</a></p>
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Brake+exposed.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/finally+solved.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/Master+Cylinder.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/torque+wrench.jpg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/wheel+removed.jpg" alt="" />
		<img class="column" src="" alt="" />
	</div>
	<div class="row">
		<p>Last summer we hired a professional photographer to do family portraits with Donna as the main prop.</p>
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/prof/Backside.jpeg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/prof/front.jpeg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/prof/Hammock.jpeg" alt="" />
		<img class="column" src="https://volkswagen-forsale-1969.s3-us-west-1.amazonaws.com/prof/Table.jpeg" alt="" />
		<img class="column" src="" alt="" />
		<img class="column" src="" alt="" />
	</div>
		
	<div id='location'>
		<p>Donna currently resides in the warm and sunny beach city of Oceanside, California</p>
	</div>

	<hr />

	<h2>If you have any questions, or would like to arrange a viewing, please contact me using the form below.</h2>

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
		max-height: 200px;
		border-radius: 20px;
		float: center;
		width:fit-content;
		padding: 5px;
		transition: transform 0.25s ease;
	}

	.row::after {
		content: "";
		clear: both;
		display: table;
	}

	.row > img:hover {
		-webkit-transform: scale(2.5);
		transform: scale(2.5);
	}

</style>