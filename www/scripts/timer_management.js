

var TimerManager = (function () {

    var storageKey = "New Timer " + (new Date()).toDateString();


    var tmpScore = window.localStorage.getItem(storageKey);
    this.amount = tmpScore === undefined || tmpScore === null ? 0 : tmpScore;
    // this.timerName = document.getElementById("new_timer_name");

    this.displayElement = document.getElementById('timer_amount');

    this.amount = 0;
    this.showAmount = () => {
        this.displayElement.textContent = this.amount;
    }

    this.showAmount(this.amount);

    this.addMinute = () => {
        this.showAmount(++this.amount);
    }

    this.subtractMinute = () => {
        this.showAmount(--this.amount);
    }

    this.saveInput = () => {
        this.timerName = document.getElementById("new_timer_name").value;
        console.log(timerName);
    }

    this.submitTimer = () => {
        this.timerName = document.getElementById("new_timer_name").value;
        console.log(this.timerName)
        console.log("Writing to storage: " + storageKey + ' ' + this.timerName + ' ' + this.amount);
        window.localStorage.setItem(storageKey, this.timerName, this.amount);
        window.alert("New Timer: " + this.timerName + ", " + this.amount + " saved");
    }

    // window.localStorage.setItem(storageKey, this.amount);

    return {
        amount: this.amount,
        addMinute: this.addMinute,
        subtractMinute: this.subtractMinute,
        saveInput: saveInput,
        submitTimer: this.submitTimer
    }

})();





