

var WaterManager = (function () {

    var storageKey = "Water Score " + (new Date()).toDateString();


    var tmpScore = window.localStorage.getItem(storageKey);
    this.amount = tmpScore === undefined || tmpScore === null ? 0 : tmpScore;

    this.displayElement = document.getElementById('water_score');


    this.showAmount = () => {
        this.displayElement.textContent = this.amount;
    }

    this.showAmount(this.amount);

    this.addWater = () => {
        this.showAmount(++this.amount);
        window.localStorage.setItem(storageKey, this.amount);
    }

    this.subtractWater = () => {
        this.showAmount(--this.amount);
        window.localStorage.setItem(storageKey, this.amount);
    }

    return {
        amount: this.amount,
        addWater: this.addWater,
        subtractWater: this.subtractWater
    }

})();





