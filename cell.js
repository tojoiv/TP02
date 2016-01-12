function Cell (v) {
  if (v)
    this.value = v;
  else
    this.value = "";
}

Cell.prototype.getValue = function() {return this.value;}
Cell.prototype.setValue = function(v) {this.value = v;}
