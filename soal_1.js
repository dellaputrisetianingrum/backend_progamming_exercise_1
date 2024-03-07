const mencariPrima = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++ ) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
};

const arr = Array.from({length:1000}, (_,index) => index + 1);

const bilanganPrima = arr.filter(mencariPrima);

console.log("Dibawah ini adalah bilangan prima 1 - 1000, antara lain sebagai berikut : ");
console.log(bilanganPrima.join('\n'));