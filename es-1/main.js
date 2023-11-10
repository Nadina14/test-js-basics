/* Manipolazione di stringhe e numeri */

function analizzaTesto(testo){
    const originale = testo;
    const minuscolo = testo.toLowerCase();
    const senzaSpazi = testo.trim();
    const numeroCaratteri = testo.length(); 
    const contieneJS = testo.includes('JS' || 'JavaScript');
    let giraParola = (x) => {
       let parolaGirata = '';
       for (let i = x.length - 1; i >= 0; i--){
       parolaGirata += x[i]; 
       }
       return parolaGirata;
    };
    giraParola(); 
    return originale, minuscolo, senzaSpazi, numeroCaratteri, contieneJS;
}
analizzaTesto('JS mi fa venire gli incubi');
