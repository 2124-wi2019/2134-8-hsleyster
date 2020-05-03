class Converter {
    //this is the base unit we want to convert to something else
    constructor(unitToConvert) {
        //we'll store this unit internally as _unitToConvert
        let check = parseFloat(unitToConvert);
        if(isNaN(check)) {
            throw new Error("Error: you must pass a number to constructor!");
        } else {
            this._unitToConvert = check;
        }
        
    }
}

//define a class named MetricToImperial here, which extends the Converter class shown above.

class MetricToImperial extends Converter {
    constructor(unitToConvert) {
        super(unitToConvert);
    }
    convertMetersToFeet() {
        const Meters = this._unitToConvert;
        let feet = Meters * 3.2808;
        return feet;
    }
    convertMetersToMiles(){
        const Meters = this._unitToConvert;
        let miles = Meters * 0.00062137;
        return miles;
    }
    convertLitersToGallons(){
        const Liters = this._unitToConvert;
        let gallons = Liters * 0.26417;
        return gallons;
    }
    convertLitersToQuarts() {
        const Liters = this._unitToConvert;
        let quarts = Liters * 1.056688;
        return quarts;
    }
    convertKilosToPounds() {
        const Kilos = this._unitToConvert;
        let pounds = Kilos * 2.2046;
        return pounds;
    }
    convertCelsiusToFahrenheit() {
        const Celsius = this._unitToConvert;
        let fahrenheit = (Celsius - 32) / 1.8;
        return fahrenheit;
    }
    static toDecimalPlaces(number) {
        if(Number.isNaN(number)== true){
            throw new Error('Error: this is not a floating-point number');
        }
        else {
            number.toFixed(2);
        }
        return number;
    }
    
}