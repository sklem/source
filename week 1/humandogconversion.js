function calculateAge(PuppyAge) {
    let HumanYears = PuppyAge / 7;
    console.log("Your doggie is " + HumanYears.toString + " years old in human years.");
    return
}

function calculateAge(PuppyAge, HumanAge) {
    let HumanYears = PuppyAge / 7;
    let DogYears = HumanAge * 7;
    console.log("Your doggie is " + HumanYears.toString + " years old in human years.");
    console.log("Your human is " + DogYears.toString + " years old in dog years.")
    return
}
calculateAge(7);
calculateAge(4, 61);
