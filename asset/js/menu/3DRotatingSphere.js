window.onload = function() {
	try {
		TagCanvas.Start('myCanvas','tags',{
			textColour: "#402218",
            outlineMethod: "colour",
			outlineColour: "#AA4A30",
			maxSpeed: 0.04,
			freezeActive: true,
			shuffleTags: true,
			shape: "sphere",
			zoom: 0.8,
			noSelect: false,
			textFont: null,
			textHeight: 18,
			pinchZoom: true,
			freezeDecel: true,
			fadeIn: 3000,
			initial: [0.3, -0.1],
			depth: 1.1,
            activeCursor: "pointer",
            frontSelect: true,
	});
	} catch(e) {
	  // something went wrong, hide the canvas container
		document.getElementById('myCanvasContainer').style.display = 'none';
	}
};