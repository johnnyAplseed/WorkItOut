
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

    this.lSitArray = ["STRAIGHT LEG RAISE - HOLD", "SINGLE STRAIGHT LEG RAISE - HOLD", "BENT KNEE RAISE - HOLD", "STRAIGHT LEG RAISES - AMRAP", "BENT KNEE RAISES - AMRAP"];
    this.pullupArray = ["FULL LENGTH DROP PULLUPS - AMRAP", "JUMP ASSIST PULLUPS - AMRAP", "ISOMETRIC HOLD JUMP ASSIST PULLUPS - AMRAP", "RESISTANCE BANDS PULLUPS - AMRAP", "AUSSIE PULLUPS - AMRAP"];
    this.dipArray = ["FIRM CORE DIP - AMRAP", "JUMP ASSIST DIPS - AMRAP", "SLOW LOWER NEGATIVE DIPS - AMRAP", "RESISTANCE BAND DIPS - AMRAP", "BEHIND THE BACK DIPS - AMRAP"];
    this.pushupArray = ["WIDE SET PUSHUPS - AMRAP", "TIGHT SET LOW PUSHUPS - AMRAP", "WIDE SET KNEE PUSHUPS - AMRAP", "TIGHT SET LOW PUSHUPS - AMRAP", "DECLINE KNEE PUSHUPS - TIGHT SET LOW - AMRAP"];
    this.squatArray = ["PISTOL SQUATS - ALTERNATE AT FAILURE - AMRAP", "ASSISTED PISTOL SQUAT - AMRAP", "EXPLOSIVE JUMP SQUATS - AMRAP", "BODY WEIGHT SQUATS - AMRAP"];
    this.cardioArray = ["TIRE FLIPS - AMRAP", "LONG JUMPS - AMRAP", "TIRE JUMPS - AMRAP", "JUMP ROPE - AMRAP"];
    this.lSitCounter = 0;
    this.pullupCounter = 0;
    this.dipCounter = 0;
    this.pushupCounter = 0;
    this.squatCounter = 0;
    this.cardioCounter = 0;
    this.exerciseCount = document.getElementsByClassName("wokrout_exercise").length;


    this.exerciseChanges = (id) => {
        var exs = document.getElementById(id);
        let self = this;

        // console.log(id);

        switch (id) {
            case "workout1":
                exs.classList.add("active");
                setTimeout(() => {
                    exs.innerText = lSitCounter === lSitArray.length ? "Finished: L-SITS" : this.lSitArray[lSitCounter++];
                    exs.classList.remove("active")
                }, 100) //after 100 milliseconds change the background to black.
                if (lSitCounter >= lSitArray.length) {
                    exs.classList.add("complete")
                }
                break;

            case "workout2":

                exs.classList.add("active");
                // let self = this;
                setTimeout(() => {
                    exs.innerText = pullupCounter === pullupArray.length ? "Finished: PULLUPS" : this.pullupArray[pullupCounter++];
                    exs.classList.remove("active")
                }, 100) //after 100 milliseconds change the background to black.
                if (pullupCounter >= pullupArray.length) {
                    exs.classList.add("complete")
                }
                break;

            case "workout3":

                exs.classList.add("active");
                // let self = this;
                setTimeout(() => {
                    exs.innerText = dipCounter === dipArray.length ? "Finished: DIPS" : this.dipArray[dipCounter++];
                    exs.classList.remove("active")
                }, 100) //after 100 milliseconds change the background to black.
                if (dipCounter >= dipArray.length) {
                    exs.classList.add("complete")
                }
                break;
            case "workout4":

                exs.classList.add("active");
                // let self = this;
                setTimeout(() => {
                    exs.innerText = pushupCounter === pushupArray.length ? "Finished: PUSHUPS" : this.pushupArray[pushupCounter++];
                    exs.classList.remove("active")
                }, 100) //after 100 milliseconds change the background to black.
                if (pushupCounter >= pushupArray.length) {
                    exs.classList.add("complete")
                }
                break;

            case "workout5":

                exs.classList.add("active");
                // let self = this;
                setTimeout(() => {
                    exs.innerText = squatCounter === squatArray.length ? "Finished: SQUATS" : this.squatArray[squatCounter++];
                    exs.classList.remove("active")
                }, 100) //after 100 milliseconds change the background to black.
                if (squatCounter >= squatArray.length) {
                    exs.classList.add("complete")
                }
                break;

            case "workout6":
                exs.classList.add("active");
                // let self = this;
                setTimeout(() => {
                    exs.innerText = cardioCounter === cardioArray.length ? "Finished: CARDIO" : this.cardioArray[cardioCounter++];
                    exs.classList.remove("active")
                    // exs.innerHTML.add("<label></label>")
                }, 100) //after 100 milliseconds change the background to black.
                if (cardioCounter >= cardioArray.length) {
                    exs.classList.add("complete")
                }
                break;
            default: console.log('Something went wrong:('); break;
        }


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




























