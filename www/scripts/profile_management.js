var ProfileManager = (function() {
    var storageKey = "Profile Info";

    var tempProfile = JSON.parse(window.localStorage.getItem(storageKey));
    this.savedProfileInfo =
        tempProfile === undefined || tempProfile === null ? 0 : tempProfile;

    console.log(savedProfileInfo);

    var displayinfo = profile => {
        // eventually make the label phase out nicely
        document.getElementById("profile_fieldFName").value =
            profile.fFName === undefined || profile.fFName == null
                ? 0
                : profile.fFName;
        document.getElementById("profile_fieldLName").value = profile.fLName;
        document.getElementById("profile_fieldHeight").value = profile.fHeight;
        document.getElementById("profile_fieldWeight").value = profile.fWeight;
        document.getElementById("profile_fieldBodyfat").value =
            profile.fBodyfat;
    };

    displayinfo(this.savedProfileInfo);

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
