console.log("Temprature converter is running");

let Celsius = document.getElementById('cel');
let  Fahrenheit = document.getElementById('fer');

cel.oninput = () => {
    let ctemp = (parseFloat(cel.value)*9)/5 + 32;
    fer.value = parseFloat(ctemp);
};
fer.oninput = () => {
    let ctemp = ((parseFloat(fer.value)-32)*5) / 9;
    cel.value = parseFloat(ctemp);
};