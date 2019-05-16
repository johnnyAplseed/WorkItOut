var ProfileManager = (function() {
    var storageKey = "Profile Info";

    var savedProfileInfo = window.localStorage.getItem(storageKey);

    this.displayinfo = tempProfile => {
        // eventually make the label phase out nicely
        (document.getElementById("profile_fieldFName").value =
            tempProfile.fFName),
            (document.getElementById("profile_fieldLName").value =
                tempProfile.fLName),
            (document.getElementById("profile_fieldHeight").value =
                tempProfile.fHeight),
            (document.getElementById("profile_fieldWeight").value =
                tempProfile.fWeight),
            (document.getElementById("profile_fieldBodyfat").value =
                tempProfile.fBodyfat);
    };

    this.displayInfo(savedProfileInfo);

    this.saveInfo = (storKey, fields) => {
        window.localStorage.setItem(storKey, fields);
    };

    this.changeInfo = () => {
        this.tempInfo = {
            fFName: document.getElementById("profile_fieldFName").value,
            fLName: document.getElementById("profile_fieldLName").value,
            fHeight: document.getElementById("profile_fieldHeight").value,
            fWeight: document.getElementById("profile_fieldWeight").value,
            fBodyFat: document.getElementById("profile_fieldBodyfat").value
        };

        displayInfo(tempInfo);
        console.log(storageKey);
        this.saveInfo(storageKey, JSON.stringify(this.info));
    };

    return {
        displayInfo: this.displayInfo,
        changeInfo: this.changeInfo,
        saveInfo: this.saveInfo
    };
})();
