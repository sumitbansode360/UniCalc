let degree = document.getElementById("degree");
let radian = document.getElementById("radian");
let gradian = document.getElementById("gradian");

function degreeToOther(val){
    radian.value = parseFloat(val) * Math.PI / 180;
    gradian.value = parseFloat(val) * 200 / 180;
}

function radianToOther(val){
    degree.value = parseFloat(val) * 180 / Math.PI;
    gradian.value = parseFloat(val) * 200 / Math.PI;
}

function gradianToOther(val){
    degree.value = parseFloat(val) * 180 / 200;
    radian.value = parseFloat(val) * Math.PI / 200;
}

function convertToOthers(convertFrom, value) {
    switch (convertFrom) {
        case "radian":
            radianToOther(parseFloat(value));
            break;
        case "degree":
            degreeToOther(parseFloat(value));
            break;
        case "gradian":
            gradianToOther(parseFloat(value));
            break;
    }
}
