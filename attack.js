//Melee
var thisField = event.target.name;
var strength = Number(this.getField("STR-Bonus").value);
var deed = this.getField("Deed-Die").value;
var attackmod = this.getField("Attack-Bonus-Melee").value;

event.value = strength+attackmod + "+" + deed;



//Ranged
var thisField = event.target.name;
var strength = Number(this.getField("AGI-Bonus").value);
var deed = this.getField("Deed-Die").value;
var attackmod = this.getField("Attack-Bonus-Ranged").value;

event.value = strength+attackmod + "+" + deed;
