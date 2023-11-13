/* Funzioni, Scoping e Cicli */

const riempiArray = (numeroElementi, valoreMinimo, valoreMassimo) => {
    const array = [];
    for(i = 0; i < numeroElementi; i++){
        const numeroCasuale = (Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) + valoreMinimo);
        array.push(numeroCasuale);
    };
    return array;
}

const contaPariDispari = (array) => {
    const obj = {
        pari: 0,
        dispari: 0
    };
    for(let j = 0; j < array.length; j++){
        if (array[j] % 2 === 0){
            obj.pari ++;
        }else {
            obj.dispari ++;
        };
    };
    return obj;
}
