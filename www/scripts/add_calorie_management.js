

var CalorieManager = (function () {

    var storageKey = "Calorie Item" + (new Date()).toDateString();


    var tmpScore = window.localStorage.getItem(storageKey);
    this.amount = tmpScore === undefined || tmpScore === null ? 0 : tmpScore;

    if (typeof this.amount === "string") {
        this.amount = parseInt(this.amount);
    }

    this.amount = 0;
    this.displayElement = document.getElementById('set_calories');


    this.showAmount = () => {
        this.displayElement.textContent = this.amount;
    }

    this.showAmount(this.amount);

    this.addCals = () => {
        this.showAmount(++this.amount); // = ++this.amount);
        window.localStorage.setItem(storageKey, this.amount);
    }

    this.subtractCals = () => {
        this.showAmount(this.amount = --this.amount);
        window.localStorage.setItem(storageKey, this.amount);
    }

    this.addTenCals = () => {
        this.amount += 10;
        this.showAmount();
        window.localStorage.setItem(storageKey, this.amount);
    }

    this.subtractTenCals = () => {
        this.amount -= 10;
        this.showAmount();
        window.localStorage.setItem(storageKey, this.amount);
    }

    this.addTwentyFiveCals = () => {
        this.amount += 25;
        this.showAmount();
        window.localStorage.setItem(storageKey, this.amount);
    }

    this.subtractTwentyFiveCals = () => {
        this.amount -= 25;
        this.showAmount();
        window.localStorage.setItem(storageKey, this.amount);
    }

    return {
        amount: this.amount,
        addCals: this.addCals,
        subtractCals: this.subtractCals,
        addTenCals: this.addTenCals,
        subtractTenCals: this.subtractTenCals,
        addTwentyFiveCals: addTwentyFiveCals,
        subtractTwentyFiveCals: subtractTwentyFiveCals
    }

})();





