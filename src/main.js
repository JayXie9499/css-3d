import "./style.css";

window.onload = () => {
	document.querySelector("#app").innerHTML = `
<div class="container">
	<h1 id="title">CSS 3D</h1>

	<div class="gallery">
		<div class="card">
			<h2>X-Spin</h2>
			<div class="stage">
				<div class="scene x-spin">
					<div class="cube">
						<div class="side top"></div>
						<div class="side bottom"></div>
						<div class="side left"></div>
						<div class="side right"></div>
						<div class="side front"></div>
						<div class="side rear"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<h2>Y-Spin</h2>
			<div class="stage">
				<div class="scene y-spin">
					<div class="cube">
						<div class="side top"></div>
						<div class="side bottom"></div>
						<div class="side left"></div>
						<div class="side right"></div>
						<div class="side front"></div>
						<div class="side rear"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  `;
};
