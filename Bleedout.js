var thisField = event.target.value;
var bleeding = this.getField("Bleeding").value;
var level = this.getField("Level").value;
var oFld = event.target;


if (bleeding == "Off") {
 
	// First acquire the field to be disabled
	var oFld = event.target;
	event.value = "";
	if(oFld) {
		// Make field Read-Only
		oFld.readonly = true;
		// Set Grayed out colors
		oFld.fillColor = ["G", 0.75]; oFld.borderColor = ["G", 2/3]; oFld.textColor = ["G", 0.5];
	}

var layerName = "Grey";
var layers = this.getOCGs();
if (layers!=null && layers.length!=0) {
for (var i in layers) {
if (layers[i].name==layerName) {
layers[i].state = true;
break;
}}}




}else if (thisField == "0") {

	if(oFld) {
		// Make field interactive
		oFld.readonly = true;
		// Restore Normal Colors
		oFld.fillColor = color.white;
		oFld.borderColor = color.red;
		oFld.textColor = color.red;	
		}
} else {

   if (!!!thisField) { event.value = level }

	if(oFld) {
		// Make field interactive
		oFld.readonly = false;
		// Restore Normal Colors
		oFld.fillColor = color.white;
		oFld.borderColor = color.black;
		oFld.textColor = color.black;
	}
var layerName = "Grey";
var layers = this.getOCGs();
if (layers!=null && layers.length!=0) {
for (var i in layers) {
if (layers[i].name==layerName) {
layers[i].state = false;
break;
}}}
  
}

console.println("bleeding=" + bleeding);
console.println("oFld.readonly=" + oFld.readonly);
console.println("oFld.fillColor=" + oFld.fillColor);
console.println("oFld.borderColor=" + oFld.borderColor);
console.println("oFld.textColor=" + oFld.textColor);
