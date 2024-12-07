var thisField = event.target.name;
var agility = Number(this.getField("AGI-Bonus").value)
var ac = Number(this.getField("AC").value)

if (agility > 0) {
  event.value = ac - agility;
} else {
  event.value = ac;
}
