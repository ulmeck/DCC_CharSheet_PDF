var thisField = event.target.name;
var bonusName = thisField + "-Add";
var attr="";

switch (thisField) {
  case "Refl": {
    attr="AGI-Bonus";
    break; }
  case "Will": {    
    attr="PER-Bonus";
    break; }
  case "Fort": {
    attr="STA-Bonus";
    break; }
}

var mod = Number(this.getField(attr).value) + Number(this.getField(bonusName).value);
	

event.value = mod;
