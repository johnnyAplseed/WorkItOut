

var water = document.getElementById('water_score');
var amount = 0;
var add_unit = document.getElementById('add_unit_water');
var subtract_unit = document.getElementById('subtract_unit_water');




function add_water() {
    console.log("adding water");
    amount++;
    water.textContent = amount;
}

function subtract_water() {
    amount--;
    water.textContent = amount;
}



add_unit.onClick = add_water;
subtract_unit.onClick = subtract_water;


// add_unit.addEventListener('click', add_water, false);

// subtract_unit.addEventListener('click', subtract_water, false);

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





