class Point {
	constructor() {
		this.x = random(0, 1) * side;
		this.y = random(0, 1) * side;
		
		if (this.x * y_func[0] + y_func[1] > this.y) {
			this.label = 1;
		} else {
			this.label = -1;
		}
	}
	
	get_inputs() {
		return [this.x, this.y];
	}
	
	show() {
		ellipse(this.x, this.y, 15, 15);
	}
}

var p;
var points = [];
var side = 400;
var y_func = [3, 0];

function setup() {
	// Initialize the perceptron
	p = new Perceptron();
	p.print_weights();
	
	// Populate the points
	for (let i = 0; i < 100; i++) {
		let pt = new Point;
		points.push(pt);
		
		//console.log(p.guess(pt.get_inputs()));
	}
	
	// Drawing
	createCanvas(side, side);
	background(0);	
}

function draw() {
	for (let i in points) {
		stroke(255);
		strokeWeight(1);
		
		// Compare the guess with the label
		if (p.guess(points[i].get_inputs()) == points[i].label) {
			fill(0, 255, 0);
		} else {
			fill(255, 0, 0);
		}
		points[i].show();
	}
	
	// Reference line
	//line(0, y_func[1] * side, 1 * side, ((1 - y_func[1]) / y_func[0]) * side);
	
	line(0, y_func[1] * side, 1 * side, (y_func[0] * 1 + y_func[1]) * side);
	
}

function mousePressed() {
	// Train with only one item. Example:
	
	for (pt in points) {
		let item = points[pt];
		p.train(item.get_inputs(), item.label);
	}
	
	console.log(p.print_weights());	
}
