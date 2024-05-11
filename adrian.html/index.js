let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
}

function decrement() {
    if (count > 0) {
        count = count - 1;
        countEl.textContent = count;
    }
}

function save() {
    let countStr = count + " ; ";
    saveEL.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

let precio_total = 0;
const precioEl = document.getElementById("precio_total");
const salida = document.getElementById("salida");
const destino = document.getElementById("destino");
const precio = {
    "Madrid": {"Zaragoza": 30, "Barcelona": 40},
    "Zaragoza": {"Madrid": 30, "Barcelona": 25},
    "Barcelona": {"Madrid": 40, "Zaragoza": 25}
};

function calcularPrecio() {
    if (salida.value !== "0" && destino.value !== "0" && salida.value !== destino.value) {
        const price = precio[salida.value][destino.value];
        precio_total += price;
        precioEl.textContent = precio_total + " €";
        const calculateButton = document.querySelector('button[onclick="calcularPrecio()"]');
        let ticketCount = precio_total / price;
        calculateButton.textContent = "CALCULAR PRECIO (" + ticketCount  + " BILLETES)";
    } else {
        alert("Por favor seleccione ciudades diferentes de salida y destino.");
    }
}

function reiniciarPrecio() {
    precio_total = 0;
    precioEl.textContent = precio_total + " €";
    const calculateButton = document.querySelector('button[onclick="calcularPrecio()"]');
    calculateButton.textContent = "CALCULAR PPRECIO";
}
