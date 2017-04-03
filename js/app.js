$(document).ready(function(){

	var classe = [groupeUn, groupeDeux, groupeTrois]
	var g = ['1', '2', '3', '4', '5'];
	var groupeUn = ["Florian", "Mouad","Raph", "Julien", "Elodie"];
	
	var groupeDeux = ["Jordi", "Greg", "Morel", "Emilie", "Marco"];

	var groupeTrois = ["Maxime", "Dimitri", "Romain", "Franck", "Oceane"];

for (var k = 0; k < classe.length; k++) {
	console.log(classe[k]);
	
	
$('#submitGroupOne').on('click', function() {
	for (var i = 0; i < 5; i++) {
		
		var hasard=Math.floor(Math.random()*(i+1));

		var sauve=g[i];
		g[i]=g[hasard];
		g[hasard]=sauve;
	}
		$('#numeroGroupOne').append(g + " ");
		console.log(g);



	for (var j = 0; j < 5; j++) {
		var classe= classe[k];
		var hasardTwo=Math.floor(Math.random()*(j+1));

		var save=classe[j];
		classe=classe[hasardTwo];
		classe[hasardTwo]=sauve;
	}
		console.log(classe);
		
});
	


}
});