var x = document.getElementById('lgate');
		x.addEventListener("animationend", showContent);
		function showContent() {
			document.getElementById('main-content').style.display = 'block';
			document.getElementById('gate').style.display = 'none';
		}

		function projDes(id) {
			var head = document.getElementById('ph' + id);
			var body = document.getElementById('pb' + id);
			var pos = 100;
			body.style.transform = 'translate(' + pos +'px,0)'; 
			head.style.display = 'none';
			body.style.display = 'block';
			var id = setInterval(frame, 5);
			head.style.transform = 'translate(-100px,0)'
			function frame() {
				if (pos == 0) {
				clearInterval(id);
				} else {
					pos--; 
					body.style.transform = 'translate(' + pos +'px,0)'; 
					body.style.opacity = 1- pos/100.0;
				}
			}
		}


		function projHead(id) {
			var head = document.getElementById('ph' + id);
			var body = document.getElementById('pb' + id);

			var pos = -100;
			head.style.transform = 'translate(' + pos +'px,0)'; 
			head.style.display = 'block';
			body.style.display = 'none';
			head.style.transform = 'translate(100px,0)'
			var id = setInterval(frame, 5);
			function frame() {
				if (pos == 0) {
				clearInterval(id);
				} else {
					pos++; 
					head.style.transform = 'translate(' + pos +'px,0)'; 
					head.style.opacity = 1 + pos/100.0;
				}
			}
			// head.style.transform = 'translate(0,0)';
			// body.style.transform = 'translate(15vw,0)';
		}