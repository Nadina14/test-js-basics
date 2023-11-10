/* Funzioni, Scoping e Cicli */

function riempiArray(numeroElementi, valoreMinimo, valoreMassimo){
    let array = [];
    for(i = 0; i < numeroElementi; i++){
        let n = (Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) + valoreMinimo);
        array.push(n);
    };
    return array;
}
/* let arrayCasuale = riempiArray(10, 2, 50);
console.log(arrayCasuale);  */

let contaPariDispari = (array) => {
        let obj = {
            pari: 0,
            dispari: 0
        }
        for(j = 0; j < array.length; j++){
            if (array[j] % 2 == 0){
               obj.pari ++;
            }else {
            obj.dispari ++;
            }
        }
        return obj ;
    }
/* let conteggio = contaPariDispari(arrayCasuale);
console.log(conteggio);
 */