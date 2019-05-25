







var WorkingOutManager = (function () {

    this.setCounter = 1;
    this.workoutCounter = 1;
    // this.storageKey = "CountWorkouts_CountSets";
    // window.localStorage.setItem(storKey, setCounter, workoutCounter);

    this.getWorkoutId = () => {
        this.workoutID = "workout" + workoutCounter + "_set" + setCounter;
        this.currentSetButton = document.getElementById(this.workoutID);
        currentSetButton.addEventListener("click", changeState, false);
        setCounter++;
        if (setCounter == 5) {
            setCounter = 1;
            workoutCounter++;
        }
    }

    getWorkoutId();
    // console.log(this.workoutID);



    function changeState() {
        currentSetButton.style.background = "#e01d1d"
        getWorkoutId();
        console.log("Do something first then add 1 to the number to get: " + this.workoutID);
    }


    return {
        changeState: changeState
    }

})();





























