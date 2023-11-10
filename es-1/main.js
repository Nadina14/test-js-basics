/* Manipolazione di stringhe e numeri */

function analizzaTesto(testo) {
    const risultato = {
        originale: testo,
        minuscolo: testo.toLowerCase(),
        senzaSpazi: testo.trim(),
        numeroCaratteri: testo.length,
        contieneJS: testo.includes('JS' || 'JavaScript'),
        invertito: giraParola(testo)
    }
    return risultato;
}

const giraParola = (x) => {
    let parolaGirata = '';
    for (let i = x.length - 1; i >= 0; i--) {
        parolaGirata += x[i];
    }
    return parolaGirata;
};
/* let fnc = analizzaTesto('JS mi fa venire gli incubi');
console.log(fnc) */