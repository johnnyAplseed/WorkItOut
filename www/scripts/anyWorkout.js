


var localStore = JSON.parse(window.localStorage.getItem("Workouts"));
var workouts = localStore.exercises;
var maxSets = 0;
var exerciseCount = Math.floor(localStore.exercises.length / 4.0);

//Get Max Number of Sets
for (var i = 2; i < localStore.exercises.length; i += 4) {
	if (localStore.exercises[i] > maxSets)
		this.maxSets = localStore.exercises[i];
}
console.log(maxSets);

//generate table headers
var currentDiv = document.getElementById("any_workout_headers_1");
for (var j = 0; j < this.maxSets; j++) {
	var nodeTD = document.createElement("td")
	nodeTD.innerHTML = "Set " + (j + 1);
	nodeTD.className = "new_workout_data new_workout_headers";
	currentDiv.appendChild(nodeTD);
}

//Generate Workout names, weight, sets/Reps, empty sets space
for (var k = 0; k < exerciseCount; k++) {

	//get table reference
	var table = document.getElementById("any_workout_table")

	//Create Table Row to be added
	var tableRow = document.createElement("tr");
	tableRow.className = "new_workout_row";


	//create data to be added to row
	let tableDataName = document.createElement("td");
	tableDataName.className = "new_workout_data";
	tableDataName.innerHTML = workouts.shift();
	tableRow.appendChild(tableDataName);

	let tableDataWt = document.createElement("td");
	tableDataWt.className = "new_workout_data";
	tableDataWt.innerHTML = workouts.shift();
	tableRow.appendChild(tableDataWt);

	let tableDataSNR = document.createElement("td");
	tableDataSNR.className = "new_workout_data";
	tableDataSNR.innerHTML = "<sup>" + workouts.shift() + "</sup> / <sub>" + workouts.shift() + "</sub>";
	tableRow.appendChild(tableDataSNR);

	for (var l = 0; l < maxSets; l++) {
		let tableDataSet = document.createElement("td");
		tableDataSet.className = "new_workout_data";
		tableDataSet.innerHTML = "";
		tableRow.appendChild(tableDataSet);
	}
	table.appendChild(tableRow);
}



