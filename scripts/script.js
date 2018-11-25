var clickplex = 1;
var result = 0;


function add(){
	result = result+clickplex;
	
	document.getElementById('result').innerHTML =  result;
	document.getElementById('clickplex').innerHTML =  clickplex;

	if (result%100==0) {clickplex = clickplex +1;}

}