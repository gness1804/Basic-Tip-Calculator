function tipCalc () {
	var x = document.getElementById("prebill").value; // The pre-tip bill $ //
	var nx = Number(x);
	var y = document.getElementById("tippct").value; // The tip %, "raw" //
	var ny = Number(y);
	var z = ny * .01; //Creates proper % by which to multiply bill amt   //
	var q = nx * z; //This figure is the amount to tip.  //
	var t = nx + q; //The total bill amount including tip //
	document.getElementById("tipamt").value = q; //The "Tip Amount" line.  //
	document.getElementById("total").value = t; //The "Total to Pay with Tip" line. //
}