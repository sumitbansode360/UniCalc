let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function celsiusToOther(val){
    fahrenheit.value = (val * 1.8) + 32;
    kelvin.value = parseFloat(val) + 273.15;
}

function fahrenheitToOther(val){
    celsius.value = (val - 32) / 1.8;
    kelvin.value = ((val - 32) / 1.8) + 273.15;
}

function kelvinToOther(val){
    celsius.value = val - 273.15;
    fahrenheit.value = ((val - 273.15) * 1.8) + 32;
}

function convertToOthers(convertFrom, value) {
    switch (convertFrom) {
        case "celsius":
            celsiusToOther(parseFloat(value));
            break;
        case "fahrenheit":
            fahrenheitToOther(parseFloat(value));
            break;
        case "kelvin":
            kelvinToOther(parseFloat(value));
            break;
    }
}
