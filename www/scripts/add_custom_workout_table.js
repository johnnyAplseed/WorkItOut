


this.workoutName;
this.workoutType;
this.workoutTable = [];
this.workoutNotes;
function saveWorkoutTable() {
    this.workoutName = document.getElementById("new_workout_name").value;
    this.workoutType = document.getElementById("workout_type").value;

    workoutTable[0] = document.getElementById("table_data_1_1").innerHTML;
    workoutTable[1] = document.getElementById("table_data_1_2").innerHTML;
    workoutTable[2] = document.getElementById("table_data_1_3").innerHTML;
    workoutTable[3] = document.getElementById("table_data_1_4").innerHTML;

    workoutTable[4] = document.getElementById("table_data_2_1").innerHTML;
    workoutTable[5] = document.getElementById("table_data_2_2").innerHTML;
    workoutTable[6] = document.getElementById("table_data_2_3").innerHTML;
    workoutTable[7] = document.getElementById("table_data_2_4").innerHTML;

    workoutTable[8] = document.getElementById("table_data_3_1").innerHTML;
    workoutTable[9] = document.getElementById("table_data_3_2").innerHTML;
    workoutTable[10] = document.getElementById("table_data_3_3").innerHTML;
    workoutTable[11] = document.getElementById("table_data_3_4").innerHTML;

    workoutTable[12] = document.getElementById("table_data_4_1").innerHTML;
    workoutTable[13] = document.getElementById("table_data_4_2").innerHTML;
    workoutTable[14] = document.getElementById("table_data_4_3").innerHTML;
    workoutTable[15] = document.getElementById("table_data_4_4").innerHTML;

    workoutTable[16] = document.getElementById("table_data_5_1").innerHTML;
    workoutTable[17] = document.getElementById("table_data_5_2").innerHTML;
    workoutTable[18] = document.getElementById("table_data_5_3").innerHTML;
    workoutTable[19] = document.getElementById("table_data_5_4").innerHTML;

    workoutTable[20] = document.getElementById("table_data_6_1").innerHTML;
    workoutTable[21] = document.getElementById("table_data_6_2").innerHTML;
    workoutTable[22] = document.getElementById("table_data_6_3").innerHTML;
    workoutTable[23] = document.getElementById("table_data_6_4").innerHTML;

    workoutTable[24] = document.getElementById("table_data_7_1").innerHTML;
    workoutTable[25] = document.getElementById("table_data_7_2").innerHTML;
    workoutTable[26] = document.getElementById("table_data_7_3").innerHTML;
    workoutTable[27] = document.getElementById("table_data_7_4").innerHTML;

    workoutTable[28] = document.getElementById("table_data_8_1").innerHTML;
    workoutTable[29] = document.getElementById("table_data_8_2").innerHTML;
    workoutTable[30] = document.getElementById("table_data_8_3").innerHTML;
    workoutTable[31] = document.getElementById("table_data_8_4").innerHTML;

    workoutTable[32] = document.getElementById("table_data_9_1").innerHTML;
    workoutTable[33] = document.getElementById("table_data_9_2").innerHTML;
    workoutTable[34] = document.getElementById("table_data_9_3").innerHTML;
    workoutTable[35] = document.getElementById("table_data_9_4").innerHTML;

    workoutTable[36] = document.getElementById("table_data_10_1").innerHTML;
    workoutTable[37] = document.getElementById("table_data_10_2").innerHTML;
    workoutTable[38] = document.getElementById("table_data_10_3").innerHTML;
    workoutTable[39] = document.getElementById("table_data_10_4").innerHTML;

    workoutTable[40] = document.getElementById("table_data_11_1").innerHTML;
    workoutTable[41] = document.getElementById("table_data_11_2").innerHTML;
    workoutTable[42] = document.getElementById("table_data_11_3").innerHTML;
    workoutTable[43] = document.getElementById("table_data_11_4").innerHTML;

    workoutTable[44] = document.getElementById("table_data_12_1").innerHTML;
    workoutTable[45] = document.getElementById("table_data_12_2").innerHTML;
    workoutTable[46] = document.getElementById("table_data_12_3").innerHTML;
    workoutTable[47] = document.getElementById("table_data_12_4").innerHTML;

    workoutTable[48] = document.getElementById("table_data_13_1").innerHTML;
    workoutTable[49] = document.getElementById("table_data_13_2").innerHTML;
    workoutTable[50] = document.getElementById("table_data_13_3").innerHTML;
    workoutTable[51] = document.getElementById("table_data_13_4").innerHTML;

    workoutTable[52] = document.getElementById("table_data_14_1").innerHTML;
    workoutTable[53] = document.getElementById("table_data_14_2").innerHTML;
    workoutTable[54] = document.getElementById("table_data_14_3").innerHTML;
    workoutTable[55] = document.getElementById("table_data_14_4").innerHTML;

    workoutTable[56] = document.getElementById("table_data_15_1").innerHTML;
    workoutTable[57] = document.getElementById("table_data_15_2").innerHTML;
    workoutTable[58] = document.getElementById("table_data_15_3").innerHTML;
    workoutTable[59] = document.getElementById("table_data_15_4").innerHTML;

    workoutTable[60] = document.getElementById("table_data_16_1").innerHTML;
    workoutTable[61] = document.getElementById("table_data_16_2").innerHTML;
    workoutTable[62] = document.getElementById("table_data_16_3").innerHTML;
    workoutTable[63] = document.getElementById("table_data_16_4").innerHTML;

    workoutTable[64] = document.getElementById("table_data_17_1").innerHTML;
    workoutTable[65] = document.getElementById("table_data_17_2").innerHTML;
    workoutTable[66] = document.getElementById("table_data_17_3").innerHTML;
    workoutTable[67] = document.getElementById("table_data_17_4").innerHTML;

    workoutTable[68] = document.getElementById("table_data_18_1").innerHTML;
    workoutTable[69] = document.getElementById("table_data_18_2").innerHTML;
    workoutTable[70] = document.getElementById("table_data_18_3").innerHTML;
    workoutTable[71] = document.getElementById("table_data_18_4").innerHTML;

    workoutTable[72] = document.getElementById("table_data_19_1").innerHTML;
    workoutTable[73] = document.getElementById("table_data_19_2").innerHTML;
    workoutTable[74] = document.getElementById("table_data_19_3").innerHTML;
    workoutTable[75] = document.getElementById("table_data_19_4").innerHTML;

    workoutTable[76] = document.getElementById("table_data_20_1").innerHTML;
    workoutTable[77] = document.getElementById("table_data_20_2").innerHTML;
    workoutTable[78] = document.getElementById("table_data_20_3").innerHTML;
    workoutTable[79] = document.getElementById("table_data_20_4").innerHTML;

    this.workoutNotes = document.getElementById("new_workout_notes").value;

    console.log("Workout Name: " + this.workoutName +
        "\nWorkout Type: " + this.workoutType +
        "\nWorkout Array: " + this.workoutTable +
        "\nWorkout Notes: " + this.workoutNotes);
}


