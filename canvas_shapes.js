canvas_1.width =  0.9*window.innerWidth;
canvas_1.height =  0.9*window.innerHeight;
		function drawEmptyRect() {

			var canvas = document.getElementById("canvas_1");

			if (canvas.getContext){
				var canvas_context = canvas.getContext("2d");
				canvas_context.width = canvas_context.clientWidth;
				canvas_context.height = canvas_context.clientHeight;
				canvas_context.scale(canvas_context.width, canvas_context.height);
				
				canvas_context.strokeRect( 20, 30, 100, 50 );
			}
		}

		function drawFilledRect() {

			var canvas = document.getElementById("canvas_1");

			if (canvas.getContext){
				var canvas_context = canvas.getContext("2d");
				canvas_context.fillRect( 20, 100, 100, 50 );
			}

		}

		function fillPinkRect() {

			var canvas = document.getElementById("canvas_1");

			if (canvas.getContext){
				var canvas_context = canvas.getContext("2d");
				canvas_context.fillStyle = "rgba(255,0,0,0.5)";
				canvas_context.fillRect( 20, 100, 100, 50 );
			}

		}
		
		function drawCircle() {

			var canvas = document.getElementById("canvas_1");

			if (canvas.getContext){
				var canvas_context = canvas.getContext("2d");
				
				var start_degrees = 0;
				var start_angle = getRadians(start_degrees);
								
				var end_degrees = 360;
				var end_angle = getRadians(end_degrees);
				
				canvas_context.beginPath();
				canvas_context.arc(75,220,50,start_angle,end_angle,true);
				
				canvas_context.strokeStyle = "rgb( 0,222,0 )";
				canvas_context.stroke();
			}
		}
		function getRadians(degrees){
			var radians = ( Math.PI/180 ) * degrees;
			return radians;
		}
