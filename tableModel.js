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
}

//zaza

tableModel.prototype = function(){
	
	console.log(this.cells);
	console.log(this.width);
	
	var verifierVide = function(tab){
		tab[1][1] =(new Cell("hendry"));
		for (var i = 0; i < tab.length; i++){
			for (var j = 0 ; j < tab[i].length; j++){
				console.log(tab[i][j].getValue());
				if (tab[i][j].getValue() != "")
					return false;
			}
		}
		return true;		
	};
	
	//var vide = verifierVide(this.cells);
	
	// console.log(vide);
	
	
	return {
		getWidth : function() {return this.width;},
		getHeigth : function() {return this.heigth;},
		firstLine : function() {
			console.log(verifierVide(this.cells));
			if (verifierVide(this.cells) == true)
				return "";
			else return "1";
		},
	};
}();