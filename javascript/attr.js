var thisField = event.target.name;
var target = this.getField(event.targetName).valueAsString.replace(/[^\d]/g, '');
var instance = thisField.slice(-1);
var fieldnum = thisField.slice(0,3);
var field = fieldnum;
var fieldBonus = fieldnum + "-Bonus-Add";
var attr = Number(this.getField(field).value);
var bonus = Number(this.getField(fieldBonus).value)
var mod = (((attr-10.5)*2/5) | 0) + bonus;

    if (!!!attr) {  
      event.value = "";
    } else {
	event.value = mod;
    }


