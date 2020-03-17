function setup() {
    var km = milesToKm(26,3);
    console.log(km);
    var km2 = milesToKm(100);
    console.log(km2);
}

function milesToKm(miles) {
    var km = miles * 1.6;
    return km;
}
