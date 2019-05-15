

var AddWorkoutManager = (function () {

    // var mysql = require('mysql');

    // var con = mysql.createConnection({
    //     host: "localhost",
    //     user: "Jon1",
    //     password: "Password1!",
    //     database: "WorkItOut"
    // });

    // con.connect(function (err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    //     con.query(sql, function (err, result) {
    //         if (err) throw err;
    //         console.log("1 record inserted");
    //     });
    // });

    this.newWorkoutDiv = document.getElementById("exercises_for_workout");

    this.numOfEx = 0;
    this.exerciseArray = [];
    this.ithValue = "";

    var getIthValue = () => {
        switch (numOfEx) {
            case 1: this.ithValue = "First"; break;
            case 2: this.ithValue = "Second"; break;
            case 3: this.ithValue = "Third"; break;
            case 4: this.ithValue = "Fourth"; break;
            case 5: this.ithValue = "Fifth"; break;
            case 6: this.ithValue = "Sixth"; break;
            case 7: this.ithValue = "Seventh"; break;
            case 8: this.ithValue = "Eighth"; break;
            case 9: this.ithValue = "Ninth"; break;
            case 10: this.ithValue = "Tenth"; break;
            case 11: this.ithValue = "Eleventh"; break;
            case 12: this.ithValue = "Twelfth"; break;
            case 13: this.ithValue = "Thirteenth"; break;
            case 14: this.ithValue = "Fourteenth"; break;
            case 15: this.ithValue = "Fifteenth"; break;
            case 16: this.ithValue = "Sixteenth"; break;
            case 17: this.ithValue = "Seventeenth"; break;
            case 18: this.ithValue = "Eightteenth"; break;
            case 19: this.ithValue = "Nineteenth"; break;
            case 20: this.ithValue = "Twentieth"; break;
            default: alert("Whoah there cowboy!!");
        }
        return this.ithValue;
    }

    var exerciseDiv = () => {
        ++this.numOfEx;
        if (this.numOfEx > 20) {
            alert("Hey Fella, thats too many damn workouts!")
        }
        else {
            var ith = getIthValue();

            part1 = new String("<div class='exercise_addition'>" +
                "<h1>Exercise "
            );

            part2 = new String(":</h1>" +
                "<input type='text' maxlength='40' placeholder='"
            );

            part3 = new String(" exercise...'>" +
                "<h2>Add images:</h2>" +
                "<input type='file' accept='image/*' multiple />" +
                "</div>" +
                "<hr>"
            );
            return part1 + this.numOfEx + part2 + ith + part3;
        }
    };

    var addExercise = () => {
        exerciseArray[numOfEx] = exerciseDiv();
        console.log(this.numOfEx);
        document.getElementById("exercises_for_workout").innerHTML = exerciseArray;
    };

    var subtractExercise = () => {
        exerciseArray[this.numOfEx] = "";
        exerciseArray.splice(--this.numOfEx, 1);
        document.getElementById("exercises_for_workout").innerHTML = exerciseArray;
    };


    exerciseArray[0] = exerciseDiv();
    exerciseArray[1] = exerciseDiv();

    document.getElementById("exercises_for_workout").innerHTML = exerciseArray;

    return {
        addExercise: addExercise,
        subtractExercise: subtractExercise
    }

})();





