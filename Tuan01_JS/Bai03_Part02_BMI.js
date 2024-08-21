var mark = {
    fullName: "Mark Miller",
    mass: 78, // kg
    height: 1.69, // meters
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};


var john = {
    fullName: "John Smith",
    mass: 92, // kg
    height: 1.95,  // meters
    calcBMI: function() {
        return this.mass / (this.height * this.height);
    }
};


var markBMI = mark.calcBMI();
var johnBMI = john.calcBMI();


if (markBMI > johnBMI) {
    console.log(mark.fullName + "'s BMI (" + markBMI.toFixed(1) + ") is higher than " + john.fullName + "'s (" + johnBMI.toFixed(1) + ")!");
} else if (johnBMI > markBMI) {
    console.log(john.fullName + "'s BMI (" + johnBMI.toFixed(1) + ") is higher than " + mark.fullName + "'s (" + markBMI.toFixed(1) + ")!");
} else {
    console.log(mark.fullName + " and " + john.fullName + " have the same BMI (" + markBMI.toFixed(1) + ")!");
}
