window.onload = function(){
	document.getElementById('result').innerHTML = localStorage.getItem('res');
	document.getElementById('clickplex').innerHTML = localStorage.getItem('cp');
	var res = localStorage.getItem('res');
	console.log(res);
	parsedresult=parseInt(res,10);
	result = parsedresult;
	var cp = localStorage.getItem('cp');
	console.log(cp);
	parcedcp=parseInt(cp,10);
	clickplex = parcedcp;
}






function add(){
	result = result+clickplex;
	
	document.getElementById('result').innerHTML =  result;
	document.getElementById('clickplex').innerHTML =  clickplex;
	localStorage.setItem('res', result);
	localStorage.setItem('cp', clickplex);
	if (result%100==0) {clickplex = clickplex +1;}

}

function reset(){
	
	localStorage.setItem('res', '0')
	localStorage.setItem('cp', '1')
	location.reload();
}


var clickplex = 1;
var result = 0;