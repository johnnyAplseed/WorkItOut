var ProfileManager = (function () {
    var storageKey = "Profile Info";
    var consoleKey = 0
    var tempProfile = JSON.parse(window.localStorage.getItem(storageKey));
    this.savedProfileInfo =
        tempProfile === undefined || tempProfile === null ? 0 : tempProfile;

    console.log(++consoleKey, savedProfileInfo);
    var tmp = savedProfileInfo;

    var height = parseFloat(tmp.fHeightFt * 12) + parseFloat(tmp.fHeightIn);
    var weight = parseFloat(tmp.fWeight);

    var bodyMassIndexCalc = ((weight / (height * height)) * 703);

    var bmiClass = document.getElementById("profile_body_mass_index");

    var setBmiClassColor = (tempBmiCalc) => {
        if (tempBmiCalc >= 30.00 || tempBmiCalc < 15) {
            console.log("Downloading this app is a great start but you may need to see a professional about weight gain or loss. Keep your chin up!")
            //color : red
            bmiClass.style.color = '#9e0000';
        } else if (tempBmiCalc >= 25.00) {
            console.log("Way to go, Try creating and testing a custom workout!")
            //color : yellow
            bmiClass.style.color = '#f4d142';
        } else if (tempBmiCalc >= 18.50) {
            console.log("Good job! BMI isnt everything though, make sure you exercise regularly")
            //color : green
            bmiClass.style.color = 'green';
        } else {
            console.log("Uh Oh");
            //color : red
            bmiClass.style.color = '#f4d142';
        };
    }

    console.log(++consoleKey, bodyMassIndexCalc);

    var ifCheck = (x) => {
        var accepted = x === undefined || x === null ? 0 : x;
        return accepted;
    }

    var displayinfo = profile => {
        // eventually make the label phase out nicely
        document.getElementById("profile_fieldFName").value = ifCheck(profile.fFName);
        document.getElementById("profile_fieldLName").value = ifCheck(profile.fLName);
        document.getElementById("profile_fieldHeightFt").value = ifCheck(profile.fHeightFt);
        document.getElementById("profile_fieldHeightIn").value = ifCheck(profile.fHeightIn);
        document.getElementById("profile_fieldWeight").value = ifCheck(profile.fWeight);
        document.getElementById("profile_fieldAge").value = ifCheck(profile.fAge);
        document.getElementById("profile_fieldBodyfat").value =
            ifCheck(profile.fBodyFat);
        document.getElementById("profile_body_mass_index").textContent = Math.round(profile.fBodyMassIndex * 100) / 100//String(profile.fBodyMassIndex).substr(0, 6);
        setBmiClassColor(Math.round(profile.fBodyMassIndex * 100) / 100);
    };

    displayinfo(ifCheck(this.savedProfileInfo));

    this.saveInfo = (storKey, fields) => {
        window.localStorage.setItem(storKey, fields);
    };

    this.changeInfo = () => {
        this.tempInfo = {
            fFName: document.getElementById("profile_fieldFName").value,
            fLName: document.getElementById("profile_fieldLName").value,
            fHeightFt: document.getElementById("profile_fieldHeightFt").value,
            fHeightIn: document.getElementById("profile_fieldHeightIn").value,
            fWeight: document.getElementById("profile_fieldWeight").value,
            fAge: document.getElementById("profile_fieldAge").value,
            fBodyFat: document.getElementById("profile_fieldBodyfat").value,
            fBodyMassIndex: 0
        };

        var tmpheight = parseFloat(tempInfo.fHeightFt * 12) + parseFloat(tempInfo.fHeightIn);
        var tmpweight = parseFloat(tempInfo.fWeight);

        var bmiCalc = ((tmpweight / (tmpheight * tmpheight)) * 703);
        console.log("ChangeInfo: ", ++consoleKey, bmiCalc);
        this.tempInfo.fBodyMassIndex = String(bmiCalc);


        // this.displayInfo(tempInfo);
        console.log(this.tempInfo);
        this.saveInfo(storageKey, JSON.stringify(this.tempInfo));
        displayinfo(ifCheck(this.tempInfo));
    };

    return {
        displayInfo: this.displayInfo,
        changeInfo: this.changeInfo,
        saveInfo: this.saveInfo,
        setBmiClassColor: this.setBmiClassColor

    };
})();
