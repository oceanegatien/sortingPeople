$(document).ready(function(){
	var resultat=[];
	


$('#submitGroup').on('click', function() {
	$('#numeroGroup').html("");

	var table = ['table 0', 'table 1', 'table 2', 'table 3', 'table 4'];
	var groupe = ["Florian", "Mouad","Raph", "Julien", "Elodie", "Maxime", "Dimitri", "Romain", "Franck", "Oceane","Jordi", "Greg", "Morel", "Emilie", "Marco"];

	var idTable=0;


for (var j = 0; j < groupe.length; j++) {	
	var hasard=Math.floor(Math.random()*(j+1));

	var save=groupe[j];
	groupe[j]=groupe[hasard];
	groupe[hasard]=save;
}


for (var i = 0; i < groupe.length; i++) {
	var nomPersonne = groupe[i];
	$('#numeroGroup').append('<td>'+nomPersonne + " est table " +idTable+'<td>');
	console.log('<td>'+nomPersonne + " est à la table " +idTable+'<td>');
	var obj = {"prenom":groupe[i],"table": idTable};
	resultat.push(obj);
	console.log(obj);
	
	if (idTable >= 4) {
		idTable=0;
	}else{
		idTable++;
	}

}

object.is(resultat["table"]);
})
});