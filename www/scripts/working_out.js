
var WorkingOutManager = (function () {

    this.setCounter = 1;
    this.workoutCounter = 1;
    // this.storageKey = "CountWorkouts_CountSets";
    // window.localStorage.setItem(storKey, setCounter, workoutCounter);

    this.getWorkoutId = () => {
        // this.workoutID = "workout" + workoutCounter + "_set" + setCounter;
        // this.currentSetButton = document.getElementById(this.workoutID);
        // currentSetButton.addEventListener("click", changeState, false);
        // setCounter++;
        // if (setCounter == 5) {
        //     setCounter = 1;
        //     workoutCounter++;
        // }
    }

    getWorkoutId();
    // console.log(this.workoutID);

    this.toggleColor = (id) => {
        var el = document.getElementById(id);
        if (el.classList.contains("jp-blabla")) {
            el.classList.remove("jp-blabla");
        } else {
            el.classList.add("jp-blabla");
        }

    }

    this.lSitArray = ["STRAIGHT LEG HOLD", "SINGLE STRAIGHT LEG", "BENT KNEE HOLD", "STRAIGHT LEG RAISES", "BENT KNEE RAISES"];
    var counter = 0;

    this.exerciseChanges = (id) => {
        var exs = document.getElementById(id);
        console.log(this.lSitArray[counter]);

        exs.classList.add("active");
        let self = this;
        setTimeout(() => {
            exs.innerText = counter === lSitArray.length ? "Finished: L-SITS" : this.lSitArray[counter++];
            exs.classList.remove("active")
        }, 100) //after 100 milliseconds change the background to black.

    }

    function changeState() {
        currentSetButton.style.background = "#e01d1d"
        getWorkoutId();
        console.log("Do something first then add 1 to the number to get: " + this.workoutID);
    }

    return {
        changeState: changeState,
        toggleColor: toggleColor,
        exerciseChanges: exerciseChanges
    }

})();




// <div class="workout_exercise">
//                 <div class="set_name">L-Sit Straight Leg</div>
//                 <div class="set_exercise" id="workout1_set1" onclick="WorkingOutManager.toggleColor('workout1_set1')">TF
//                 </div>
//             </div>
//             <div class="workout_exercise">
//                 <div class="set_name">L-Sit One Leg Straight</div>
//                 <div class="set_exercise" id="workout2_set2" onclick="WorkingOutManager.toggleColor('workout2_set2')">TF
//                 </div>
//                 <div class="set_exercise" id="workout2_set1" onclick="WorkingOutManager.toggleColor('workout2_set1')">TF
//                 </div>
//             </div>
//             <div class="workout_exercise">
//                 <div class="set_name">L-Sit Bent Legs</div>
//                 <div class="set_exercise" id="workout3_set1" onclick="WorkingOutManager.toggleColor('workout3_set1')">TF
//                 </div>
//             </div>
//             <div class="workout_exercise">
//                 <div class="set_name">Straight Raises</div>
//                 <div class="set_exercise" id="workout4_set1" onclick="WorkingOutManager.toggleColor('workout4_set1')">TF
//                 </div>
//             </div>
//             <div class="workout_exercise">
//                 <div class="set_name">Bent Raises</div>
//                 <div class="set_exercise" id="workout5_set1" onclick="WorkingOutManager.toggleColor('workout5_set1')">TF
//                 </div>
//             </div>
























