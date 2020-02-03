//initialize variables
this.workoutName;
this.workoutType;
this.workoutTable = [];
this.workoutNotes;

function saveWorkoutTable() {

    var workoutArray = JSON.parse(window.localStorage.getItem("Workouts"));


    var newWorkout = {
        name: null,
        type: null,
        notes: null,
        exercises: [],
        arrLength: 0,
        dateCreated: new Date()
    };


    //loop through table to grab workouts
    for (var i = 1; i < 21; i++) {
        for (var j = 1; j < 5; j++) {
            //check if the cell has value
            if (document.getElementById("table_data_" + i + "_" + j).innerHTML.length > 0) {
                //add populated cell to the end of the array
                newWorkout.exercises.push(document.getElementById("table_data_" + i + "_" + j).innerHTML);
            }
        }
    }
    //Add workout name, type, and notes to the array
    newWorkout.name = document.getElementById("new_workout_name").value;
    newWorkout.type = document.getElementById("workout_type").value;
    newWorkout.notes = document.getElementById("new_workout_notes").value;
    newWorkout.arrLength = newWorkout.exercises.length;

    //Log the results for validation
    console.log("NEW WORKOUT2:\nWorkout Name: " + newWorkout.name +
        "\nWorkout Type: " + newWorkout.type +
        "\nWorkout Array: " + newWorkout.exercises +
        "\nArray Length:" + newWorkout.arrLength +
        "\nWorkout Notes: " + newWorkout.notes);

    workoutArray.push(newWorkout);

    confirm("Are you sure you want to submit this workout?");
    window.localStorage.setItem("Workouts", JSON.stringify(workoutArray));
    window.location.href = "../content/workouts.html";
}


