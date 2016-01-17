function tableModel (w, h) {
  if (typeof w != "number" || w < 1)
    this.width = 1;
  else
    this.width = Math.floor(w);

  if (typeof h != "number" || h < 1)
    this.heigth = 1;
  else
    this.heigth = Math.floor(h);

  this.cells = new Array(this.heigth);

  for (var i = 0 ; i < this.heigth ; i ++){
     this.cells[i] = new Array(this.width);
     for (var j = 0 ; j <this.width ; j++){
          this.cells[i][j] = new Cell("");
     }
  }
  this.cells[56][56].setValue(12);
  //tab[1][1] =(new Cell("zo"));
}

tableModel.prototype = function(){
	
	console.log(this.cells);
	console.log(this.width);
	
	var verifierVide = function(tab){
		for (var i = 0; i < tab.length; i++){
			for (var j = 0 ; j < tab[i].length; j++){				
				if (tab[i][j].getValue() != "")
					return false;
			}
		}
		return true;		
	};
	
	var reglerLigne = function(tab){
		var indice = -2;
		for (var i = 0; i < tab.length ; i++){
			for (var j = 0; j <tab[i].length; j ++){
				if (tab[i][j].getValue() != ""){
					indice = i;
					break;
				}
			}			
		}
		return indice + 1;
	};
	
	var reglerColonne = function(tab){		
		var indice = -2;
		for (var i = 0; i < tab.length; i++){
			for (var j = 0; j < tab[i].length; j++){
				if (tab[i][j].getValue() != ""){
					if (j > indice){
						indice = j;
					}
				}
			}
		}
		//utiliser valeur indice
		if (indice == -2){
			return undefined;
		} else {
			var colonne = nomColonne(indice);
			return colonne;
		}		
	};
	
	var nomColonne = function (entier){
		var alphabet = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
		var resultat = "";
		for (var i = 0; i < 26; i++){
			if (entier%26 == i){
				if (Math.floor(entier/26) == 0){
					resultat = alphabet[i];
				}else{
					resultat = nomColonne(Math.floor(entier/26) - 1) + alphabet[i];
				}
			}
		}
		return resultat;
	};
	
	//console.log(nomColonne(18278));
	
	//console.log("za"=="zaz");
	
	var numeroColonne = function (nomColonne){
		var alphabet = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
		var tableauCaractere = nomColonne.split('');
		var nombreCaractere = tableauCaractere.length;
		var valeurFinal = 0;
		for (var i = 0, j = nombreCaractere - 1; i < nombreCaractere; i++, j--){
			for (var k = 0; k < alphabet.length; k ++){
				if (tableauCaractere[i] == alphabet[k]){
					valeurFinal += Math.pow(26, j)*(k + 1);					
				}
			}			
		}
		return valeurFinal - 1 ;		
	}
	
	//console.log(numeroColonne("VZT"));
	
	return {
		getWidth : function() {return this.width;},
		getHeigth : function() {return this.heigth;},
		firstLine : function() {
			if (verifierVide(this.cells) == true)
				return "";
			else return "1";
		},
		firstColumn : function(){
			if (verifierVide(this.cells) == true)
				return "";
			else return "A";
		},
		lastLine : function(){
			var ligne = reglerLigne (this.cells);
			if (ligne == -1)
				return "";
			else return ligne;			
		},
		lastColumn : function(){
			var colonne = reglerColonne(this.cells);
			if (colonne == undefined)
				return "";
			else return colonne;
		}
	};
}();