const precios = {
    'a': 270,
    'b': 340,
    'c': 390
};
const monedas = {
    '10': 0,
    '50': 0,
    '100': 0
};
let nV = "El valor ingresado no es valido, intentelo de nuevo";
let correct = false
let alimento = undefined;
let valores = [];
let pago = 0;
let vueltas = 0;
let residuo = undefined;

function conteo(precio){
    while (!correct){
        let ingresadas = [];
        for (i in monedas){
            let cantMonedas = parseInt(prompt(`Has escogido el alimento a.\n¿Cuantas monedas de ${i} vas a utilizar para pagar`));
            ingresadas.push(cantMonedas);
        }
        for (let i = 0; i < ingresadas.length; i++){
            switch (i){
                case 0:
                    valores[0] = ingresadas[i] * 10;
                    pago += valores[0];
                    break;
                case 1:
                    valores[1] = ingresadas[i] * 50;
                    pago += valores[1];
                    break;
                case 2:
                    valores[2] = ingresadas[i] * 100;
                    pago += valores[2];
                    break;
            }
        }
        if (pago < precio){
            alert("Saldo insuficiente, vuelva a intentar.");
        } else {
            residuo = pago - precio;
            while (residuo != 0){
                if (residuo > 100){
                    monedas['100'] = parseInt(residuo / 100);
                    residuo %= 100
                } else if (residuo > 50){
                    monedas['50'] = parseInt(residuo / 50);
                    residuo %= 50
                } else {
                    monedas['10'] = parseInt(residuo / 10);
                    residuo %= 10
                }
            }
            vueltas = pago - precio;
            alert(`Precio: $${precio}\nHas pagado: $${pago}\nSu cambio es: $${vueltas}\n${monedas['100']} monedas de $100\n${monedas['50']} monedas de $50\n${monedas['10']} monedas de $10`)
            break;
        }
    }
}

while (true){
    alimento = prompt(`Escoja el alimento que consumirá\na: $${precios['a']}\nb: $${precios['b']}\nc: $${precios['c']}`)
    if (!(alimento in precios)) {
        alert(nV);
    } else {
        break;
    }
}

if (alimento == "a"){
    conteo(precios['a'])
} else if (alimento == "b"){
    conteo(precios['b'])
} else if (alimento == "c"){
    conteo(precios['c'])
}