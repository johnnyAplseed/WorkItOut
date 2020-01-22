
window.onload = function () {
	var workouts = JSON.parse(localStorage.getItem("Workouts"));
	console.log(JSON.stringify(workouts));

	this.availableWorkouts = document.getElementById("workouts_wrapper").innerHTML;

	document.getElementById("workouts_wrapper").innerHTML += "<div><button class='workout_button' onClick=" + "window.location.href='" + "../workouts/anyWorkout.html'>" + (workouts.name).toString() + "</button>"
}




















