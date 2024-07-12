//Defnir un arreglo de nombres de producto
const nombres = [ "Lapiz HB", 
    "Resaltador",
    "Borrador de nata",
    8788987, 
    true,
    undefined  ];

//agregar elementos
nombres[3] = "Micropuntas"

console.log(nombres[1]) 
nombres.push("Corrector");
nombres.unshift("Esfero");
delete nombres[3];

//eliminar elementos del final:

nombres.pop();
//eliminar el primero
nombres.shift();
console.table(nombres);

//recorrer un arreglo

for(let i = 0; i<nombres.length ; i=i+1 ){    
    console.log(nombres[i])

}
//operador Spread con arreglos:

const nombres2 = [
    "Tranasportador",
    "Regla 30cm "
]

const productos = [ ...nombres, ...nombres2]
console.table(productos)
    



