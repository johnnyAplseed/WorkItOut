
window.onload = function () {
	var workouts = JSON.parse(localStorage.getItem("Workouts"));
	console.log(JSON.stringify(workouts));

	this.availableWorkouts = document.getElementById("workouts_wrapper").innerHTML;
	for (var i = 0; i < workouts.length; i++) {
		console.log(workouts[i].name.toString().replace(/ /g, '_'));
		document.getElementById("workouts_wrapper").innerHTML += "<div><button class='workout_button' id=" + workouts[i].name.toString().replace(/ /g, '_') + " onClick=" + "loadWorkout('" + workouts[i].name.toString().replace(/ /g, '_') + "')>" + (workouts[i].name).toString() + "</button></div>"
	}

	document.getElementById("workouts_wrapper").innerHTML += "<div></div><button class='workout_button' onclick=" + "window.location.href='" + "../additions/add_workout_table.html'>Add Workout</button></div>"

}

function loadWorkout(name) {
	console.log(name);
	console.log(name.toString().replace('_', ' '));
	url = '../workouts/anyWorkout.html?name=' + encodeURIComponent(name.toString());
	document.location.href = url;
}















