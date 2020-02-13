class Perceptron {
	
	constructor() {
		this.weights = [random(-1,1), random(-1,1)];
	}
	
	guess(inputs) {
	// inputs should be an array of points with the same length of the weights
		let sum = 0;
		
		for (let i = 0; i < this.weights.length; i++) {
			sum += this.weights[i] * inputs[i];
		}
		
		return Math.sign(sum);
	}
	
	train(inputs, label) {
		let my_guess = this.guess(inputs);
		let error = label - my_guess;
		
		for (let i = 0; i < this.weights.length; i++) {
			this.weights[i] += inputs[i] * error * 0.1;
		}
		
		return [my_guess, error];
	}
	
	print_weights() {
		console.log(this.weights);
	}	
}
