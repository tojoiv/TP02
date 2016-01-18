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
  this.cells[1][2].setValue(12);
  //tab[1][1] =(new Cell("zo"));
}

tableModel.prototype = function(){
	
	console.log(this.cells);
	console.log(this.width);
	
	//Verification si le tableau est vide ou pas
	var verifierVide = function(tab){
		for (var i = 0; i < tab.length; i++){
			for (var j = 0 ; j < tab[i].length; j++){				
				if (tab[i][j].getValue() != "")
					return false;
			}
		}
		return true;		
	};
	
	//Prend en parametre le tableau et renvoi le nom du ligne 
	var reglerLigne = function(tab){
		var indice = -1;
		for (var i = 0; i < tab.length ; i++){
			for (var j = 0; j <tab[i].length; j ++){
				if (tab[i][j].getValue() != ""){
					indice = i;
					break;
				}
			}			
		}
		return indice;
	};
	
	var reglerColonne = function(tab){		
		var indice = -1;
		for (var i = 0; i < tab.length; i++){
			for (var j = 0; j < tab[i].length; j++){
				if (tab[i][j].getValue() != ""){
					if (j > indice){
						indice = j;
					}
				}
			}
		}
		
		return indice;
		
		//utiliser valeur indice
				
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
	
	
	var numeroColonne = function (nomColonne){
		var alphabet = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
		var tableauCaractere = nomColonne.split('');
		var nombreCaractere = tableauCaractere.length;
		var valeurFinal = 0;
		var estAlphabet = false;
		for (var i = 0, j = nombreCaractere - 1; i < nombreCaractere; i++, j--){
			for (var k = 0; k < alphabet.length; k ++){
				if (tableauCaractere[i] == alphabet[k]){
					valeurFinal += Math.pow(26, j)*(k + 1);	
						estAlphabet = true;
				}
			}		
			if (estAlphabet == false){
				return undefined;
			}
			estAlphabet = false;
		}
		return valeurFinal - 1 ;		
	}
	
	//console.log(numeroColonne("VT"));
	
	var numeroLigne = function (nomLigne){
		var chiffre = new Array ("0","1","2","4","5","6","7","8","9");
		var tableauCaractere = nomLigne.split('');	
		var nombreCaractere = tableauCaractere.length;
		var estChiffre = false;		
		for (var i = 0; i< nombreCaractere; i++){
			for (var j = 0; j < chiffre.length; j++){
				if (tableauCaractere[i] == chiffre[j]){
					estChiffre = true;
				}
			}
			if (estChiffre == false){
				return undefined;
			}
			estChiffre = false;
		}
		
		return parseInt(nomLigne) - 1;
	}
	
	//console.log(numeroLigne("1299"));
	
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
			console.log(ligne);
			if (ligne == -1)
				return "";
			else return (ligne + 1).toString();			
		},
		lastColumn : function(){
			var colonne = reglerColonne(this.cells);	
			console.log(colonne);
			if (colonne == -1){
				return "";
			} else {
				return nomColonne(colonne);
			}
		},
		getCell : function (c, r){
			var i = numeroLigne(r);
			var j = numeroColonne(c);
			
			if (i == undefined || j == undefined){
				return undefined;
			}			
			return this.cells[i][j];
		},
		getCellAtIdx : function (i, j){
			return this.cells[i][j];
		},
		/*insertLineAtIdx(i){
			for (var j = i; j < this.cells )
		}*/
	};
}();