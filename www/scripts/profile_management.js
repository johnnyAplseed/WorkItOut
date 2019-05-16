var ProfileManager = (function() {
    var storageKey = "ProfileInfo";

    var tempProfileInfo = window.localStorage.getItem(storageKey);

    this.info = {
        labelFName = document.getElementById("proflie_labelFName"),
        fieldFName = document.getElementById("proflie_fieldFName"),
        labelLName = document.getElementById("proflie_labelLName"),
        fieldLName = document.getElementById("proflie_fieldLName"),
        labelHeight = document.getElementById("proflie_labelHeight"),
        fieldHeight = document.getElementById("proflie_fieldHeight"),
        labelWeight = document.getElementById("proflie_labelWeight"),
        fieldWeight = document.getElementById("proflie_fieldWeight"),
        labelBodyfat = document.getElementById("proflie_labelBodyfat"),
        fieldBodyFat = document.getElementById("proflie_fieldBodyfat")
        // this.label = document.getElementById("proflie_label");
        // this.field = document.getElementById("proflie_field");
    };

    this.changeInfo = () => {
        this.info.fieldFName = this.fieldFName.textContent;
        this.info.labelFName.textContent = "";
        
        this.info.fieldLName = this.fieldLName.textContent;
        this.info.labelFName.textContent = "";
        
        this.info.fieldHeight = this.fieldHeight.textContent;
        this.info.labelFName.textContent = "";
        
        this.info.fieldWeight = this.fieldWeight.textContent;
        this.info.labelFName.textContent = "";
        
        this.info.fieldBodyFat = this.fieldBodyFat.textContent;
        this.info.labelFName.textContent = "";        

        this.saveInfo(this.storageKey, this.info);
    };

    this.saveInfo = (storKey, fields) => {
        window.localStorage.setItem(storKey, fields);
    };


    this.addWater = () => {
        this.showAmount(++this.amount);
        window.localStorage.setItem(storageKey, this.amount);
    };

    this.subtractWater = () => {
        this.showAmount(--this.amount);
        window.localStorage.setItem(storageKey, this.amount);
    };

    return {
        amount: this.amount,
        addWater: this.addWater,
        subtractWater: this.subtractWater
    };
})();
