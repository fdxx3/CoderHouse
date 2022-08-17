let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];

const arregloFinal = [...arreglo1, ...arreglo2];

console.log("arreglo final", arregloFinal);

let arreglo3 = arreglo2;
arreglo3.push(7);
console.log("arreglo3", arreglo3);
console.log("arreglo1", arreglo1);
