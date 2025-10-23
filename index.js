/*
let canasta = ["manzana", "mango", "banano", "piña"];
for (fruta of canasta) {
    console.log(fruta);
}

const listadecompras = {
    manzana: 5,
    piña: 4,
    mango: 6,
    melocoton: 1,
}

for (fruta in listadecompras) {
    console.log (fruta);
}

for (fruta in listadecompras) {
    console.log(`${fruta} : ${listadecompras[fruta]}`);
}

let contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
} 
discountpercentage
function calculateDiscountedPrice (price, discountpercentage) {
    const discount = (price * discountpercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalprice = 100
const discountpercentage = 20
const finalprice = calculateDiscountedPrice(originalprice, discountpercentage)

console.log('original price: $' + originalprice)
console.log('discount: ' + discountpercentage +'%')
console.log('price with discount: $' + finalprice)


const rocket = {
    name: 'Falcon 9',
    launchmessage: function launchmessage () {
        console.log( this.name  )
    }
}

rocket.launchmessage()
*/