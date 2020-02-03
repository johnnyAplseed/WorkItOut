
window.onload = function () {
	var workouts = JSON.parse(localStorage.getItem("Workouts"));
	console.log(JSON.stringify(workouts));

	this.availableWorkouts = document.getElementById("workouts_wrapper").innerHTML;
	for (var i = 0; i < workouts.length; i++) {
		document.getElementById("workouts_wrapper").innerHTML += "<div><button class='workout_button' onClick=" + "window.location.href='" + "../workouts/anyWorkout.html'>" + (workouts[i].name).toString() + "</button>"
	}

	document.getElementById("workouts_wrapper").innerHTML += "<button class='workout_button' onclick=" + "window.location.href='" + "../additions/add_workout_table.html'>Add Workout</button>"

}




















