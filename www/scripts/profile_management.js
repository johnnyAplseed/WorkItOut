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
        document.getElementById("profile_body_mass_index").textContent = ifCheck(profile.fBodyMassIndex);
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
            fBodyMassIndex: bodyMassIndexCalc
        };

        // this.displayInfo(tempInfo);
        console.log(JSON.stringify(this.tempInfo));
        this.saveInfo(storageKey, JSON.stringify(this.tempInfo));
    };

    return {
        displayInfo: this.displayInfo,
        changeInfo: this.changeInfo,
        saveInfo: this.saveInfo

    };
})();
