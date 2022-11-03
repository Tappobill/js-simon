let numeri = [];
let randomNumeri = 5;





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function numeriRandom() {
    numeri = [];
    while (numeri.length < randomNumeri) {
        let numRandom = getRandomInt(1, 100);
        if (numeri.includes(numRandom) === false) {
            numeri.push(numRandom);
        }
    }
    random.append(numeri);    
}

function play(){
    numeriRandom();    
}