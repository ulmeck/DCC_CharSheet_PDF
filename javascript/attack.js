//Melee 
var thisField = event.target.name;
var strength = Number(this.getField("STR-Bonus").value);
var attackmod = this.getField("Attack-Bonus-Melee").value;

  event.value = strength+attackmod;



//Ranged
var thisField = event.target.name;
var agility = Number(this.getField("AGI-Bonus").value);
var attackmod = this.getField("Attack-Bonus-Melee").value;

  event.value = agility+attackmod;















//Melee
var thisField = event.target.name;
var strength = Number(this.getField("STR-Bonus").value);
var deed = this.getField("Deed-Die").value;
var attackmod = this.getField("Attack-Bonus-Melee").value;

// remove deed for all but warriors

if (strength === "") {
  event.value = "";
} else {
  event.value = strength+attackmod + "+" + deed;
}


//Ranged
var thisField = event.target.name;
var strength = Number(this.getField("AGI-Bonus").value);
var deed = this.getField("Deed-Die").value;
var attackmod = this.getField("Attack-Bonus-Ranged").value;

// remove deed for all but warriors

if (strength === "") {
  event.value = "";
} else {
  event.value = strength+attackmod + "+" + deed;
}
