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

if (this.getField(attr).value === "") {
  event.value  = "";
} else {
  event.value = Number(this.getField(attr).value) + Number(this.getField(bonusName).value);
}	

