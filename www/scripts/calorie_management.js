var CalorieManager = (function() {
    var storageKey = "Calorie Score " + new Date().toDateString();
    var amount = 0;

    var tmpScore = window.localStorage.getItem(storageKey);
    this.amount = tmpScore === undefined || tmpScore === null ? 0 : tmpScore;

    if (typeof this.amount === "string") {
        this.amount = parseInt(this.amount);
    }

    this.displayElement = document.getElementById("calorie_score");

    this.showAmount = () => {
        this.displayElement.textContent = this.amount;
    };

    this.showAmount(this.amount);

    this.addCals = () => {
        this.showAmount(++this.amount); // = ++this.amount);
        window.localStorage.setItem(storageKey, this.amount);
    };

    this.subtractCals = () => {
        this.showAmount((this.amount = --this.amount));
        window.localStorage.setItem(storageKey, this.amount);
    };

    this.addMultiCals = () => {
        this.amount += 10;
        this.showAmount();
        window.localStorage.setItem(storageKey, this.amount);
    };

    this.subtractMultiCals = () => {
        this.amount -= 10;
        this.showAmount();
        window.localStorage.setItem(storageKey, this.amount);
    };

    return {
        amount: this.amount,
        addCals: this.addCals,
        subtractCals: this.subtractCals,
        addMultiCals: this.addMultiCals,
        subtractMultiCals: this.subtractMultiCals
    };
})();
