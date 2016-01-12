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

tableModel.prototype = function(){
	
	console.log(this.cells);
	console.log(this.width);
	
	var verifierVide = function(tab){
		//tab[1][1] =(new Cell("zo"));
		//tab[1][1].setValue(12);
		for (var i = 0; i < tab.length; i++){
			for (var j = 0 ; j < tab[i].length; j++){				
				if (tab[i][j].getValue() != "")
					return false;
			}
		}
		return true;		
	};
	
	
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
			else return "A"
		}
	};
}();