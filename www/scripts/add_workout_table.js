
var AddWorkoutTableManager = new (function () {

    // this.ExerciseTableStart = `
    // <table id="new_workout_table">
    // <caption id="new_workout_table_name">New Workout</caption>
    //     <tr class="new_workout_row" id="row_headers">
    //         <th class="new_workout_data new_workout_headers">Exercise</th>
    //         <th class="new_workout_data new_workout_headers">Set</th>
    //         <th class="new_workout_data new_workout_headers">Weight</th>
    //         <th class="new_workout_data new_workout_headers">Reps</th>
    //         <th class="new_workout_data new_workout_headers">Status</th>
    //         <th class="new_workout_data new_workout_headers">Notes</th>
    //     </tr>
    //     <tr class="new_workout_row">
    //         <td class="new_workout_data" contenteditable="true">Name exercise...</td>
    //         <td class="new_workout_data" contenteditable="true">sets</td>
    //         <td class="new_workout_data" contenteditable="true">lbs</td>
    //         <td class="new_workout_data" contenteditable="true">reps</td>
    //         <td class="new_workout_data" contenteditable="true">tap</td>
    //         <td class="new_workout_data" contenteditable="true">tap to add</td>
    //     </tr>
    //     <tr class="new_workout_row">
    //         <td class="new_workout_data" contenteditable="true">Name exercise...</td>
    //         <td class="new_workout_data" contenteditable="true">sets</td>
    //         <td class="new_workout_data" contenteditable="true">lbs</td>
    //         <td class="new_workout_data" contenteditable="true">reps</td>
    //         <td class="new_workout_data" contenteditable="true">tap</td>
    //         <td class="new_workout_data" contenteditable="true">tap to add</td>
    //     </tr>
    // `

    // this.TableEnd = `</table>`

    // this.ExerciseTableCode = `${this.ExerciseTableStart} ${this.TableEnd}`


    this.PlusOneExercise = `
        <tr class="new_workout_row">
            <td class="new_workout_data" contenteditable="true">Name exercise...</td>
            <td class="new_workout_data" contenteditable="true">sets</td>
            <td class="new_workout_data" contenteditable="true">lbs</td>
            <td class="new_workout_data" contenteditable="true">reps</td>
            <td class="new_workout_data" contenteditable="true">tap</td>
            <td class="new_workout_data" contenteditable="true">tap to add</td>
        </tr>
    `;

    this.PlusOneExerciseHidden = `
        <tr class="new_workout_row hidden">
            <td class="new_workout_data" contenteditable="true">Name exercise...</td>
            <td class="new_workout_data" contenteditable="true">sets</td>
            <td class="new_workout_data" contenteditable="true">lbs</td>
            <td class="new_workout_data" contenteditable="true">reps</td>
            <td class="new_workout_data" contenteditable="true">tap</td>
            <td class="new_workout_data" contenteditable="true">tap to add</td>
        </tr>
    `;

    this.exerciseList = [];



    this.Render = () => {

        console.log("Render")

        let view = `
            <table id="new_workout_table">
                <caption id="new_workout_table_name">New Workout</caption>
                <tr class="new_workout_row" id="row_headers">
                    <th class="new_workout_data new_workout_headers">Exercise</th>
                    <th class="new_workout_data new_workout_headers">Set</th>
                    <th class="new_workout_data new_workout_headers">Weight</th>
                    <th class="new_workout_data new_workout_headers">Reps</th>
                    <th class="new_workout_data new_workout_headers">Status</th>
                    <th class="new_workout_data new_workout_headers">Notes</th>
                </tr>
        `

        this.exerciseList.forEach(exer => {
            view += exer;
        });

        view += '</table>';

        document.getElementById("new_workout").innerHTML = view;
    }

    this.PreRender = () => {

        console.log("PreRender")
        let view = `
            <table id="new_workout_table">
                <caption id="new_workout_table_name">New Workout</caption>
                <tr class="new_workout_row" id="row_headers">
                    <th class="new_workout_data new_workout_headers">Exercise</th>
                    <th class="new_workout_data new_workout_headers">Set</th>
                    <th class="new_workout_data new_workout_headers">Weight</th>
                    <th class="new_workout_data new_workout_headers">Reps</th>
                    <th class="new_workout_data new_workout_headers">Status</th>
                    <th class="new_workout_data new_workout_headers">Notes</th>
                </tr>
        `
        this.exerciseList.forEach((exer, index) => {

            if (index === this.exerciseList.length - 1) {
                console.log("a")
                view += this.PlusOneExerciseHidden;
                console.log(this.PlusOneExerciseHidden)
            } else {
                console.log("b");
                view += this.PlusOneExercise;
            }

        });

        view += '</table>';

        document.getElementById("new_workout").innerHTML = view;

        setTimeout(this.Render, 2500);
    }

    this.AddExercise = () => {
        this.exerciseList.push(this.PlusOneExercise);

        this.PreRender();
    }

    // setInterval(this.AddExercise, 50)

    this.AddExercise();

})();
