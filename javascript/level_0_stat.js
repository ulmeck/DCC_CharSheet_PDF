//ATTR, Debug version
var thisField = event.target.name;
var target = this.getField(event.targetName).valueAsString.replace(/[^\d]/g, '');
var instance = thisField.slice(-1);
var fieldnum = thisField.slice(0,3);
var field = fieldnum + "-" + instance;
var attr = Number(this.getField(field).value);

var mod = (attr-10.5)*2/5 | 0;

console.println("thisField=" + thisField);
console.println("target=" + target);
console.println("field=" + field);
console.println("fieldnum=" + fieldnum);
console.println("instance=" + instance);
console.println("attr=" + attr);
console.println("mod=" + mod);

if (fieldnum == "LUC") {
	console.println("blep");
  if (!!!target && !!attr) {
    event.value = mod;
   console.println("boop");
  }  

} else {
    if (!!!attr) {  
      event.value = "";
	console.println("beep");
    } else {
	event.value = mod;
	console.println("bop");
    }
}


//ATTR, Normal Version
var thisField = event.target.name;
var target = this.getField(event.targetName).valueAsString.replace(/[^\d]/g, '');
var instance = thisField.slice(-1);
var fieldnum = thisField.slice(0,3);
var field = fieldnum + "-" + instance;
var attr = Number(this.getField(field).value);

var mod = (attr-10.5)*2/5 | 0;


    if (!!!attr) {  
      event.value = "";
    } else {
	event.value = mod;
    }


//Luck - Ref
var thisField = event.target.name;
var target = this.getField(event.targetName).valueAsString.replace(/[^\d]/g, '');
var instance = thisField.slice(-1);
var agiBonus = "AGI-BONUS" + "-" + instance;
var agiBonusNum = Number(this.getField(agiBonus).value);
var luckBonus = "LUC-BONUS" + "-" + instance;
var luckBonusNum = Number(this.getField(luckBonus).value);
var luckBool = "Reflex-Luck" + "-" + instance;
var luckBoolVal = this.getField(luckBool).value;

bonus = agiBonusNum;


if (luckBoolVal == "Yes") {
  bonus += luckBonusNum;
}

event.value = bonus;

//Luck - Fort
var thisField = event.target.name;
var target = this.getField(event.targetName).valueAsString.replace(/[^\d]/g, '');
var instance = thisField.slice(-1);
var staBonus = "STA-BONUS" + "-" + instance;
var staBonusNum = Number(this.getField(staBonus).value);
var luckBonus = "LUC-BONUS" + "-" + instance;
var luckBonusNum = Number(this.getField(luckBonus).value);
var luckBool = "Fort-Luck" + "-" + instance;
var luckBoolVal = this.getField(luckBool).value;

bonus = staBonusNum;


if (luckBoolVal == "Yes") {
  bonus += luckBonusNum;
}

event.value = bonus;


//Luck - Will
var thisField = event.target.name;
var target = this.getField(event.targetName).valueAsString.replace(/[^\d]/g, '');
var instance = thisField.slice(-1);
var willBonus = "PER-BONUS" + "-" + instance;
var willBonusNum = Number(this.getField(willBonus).value);
var luckBonus = "LUC-BONUS" + "-" + instance;
var luckBonusNum = Number(this.getField(luckBonus).value);
var luckBool = "Will-Luck" + "-" + instance;
var luckBoolVal = this.getField(luckBool).value;

bonus = willBonusNum;


if (luckBoolVal == "Yes") {
  bonus += luckBonusNum;
}

event.value = bonus;





console.println("thisField=" + thisField);
console.println("target=" + target);
console.println("field=" + field);
console.println("fieldnum=" + fieldnum);
console.println("instance=" + instance);
console.println("luckbonusnum=" + luckBonusNum);
console.println("luckbonus=" + luckBonus);
console.println("luckbool=" + luckBool);
console.println("luckBoolVal=" + luckBoolVal);
console.println("x="+ agBonusNum);
