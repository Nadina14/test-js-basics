/* Manipolazione di stringhe e numeri */

const analizzaTesto = (testo) => {
    const obj = {};
    obj.originale = testo,
    obj.minuscolo = testo.toLowerCase();
    obj.senzaSpazi = testo.trim();
    obj.numeroCaratteri = obj.senzaSpazi.length;
    obj.contieneJS = testo.includes('JS' || 'JavaScript');
    obj.invertita = '';
    for (let i = testo.length - 1; i >= 0; i--) {
        const char = testo[i];
        obj.invertita += char;
    }
    return obj;
}
/* let fnc = analizzaTesto('JS mi fa venire gli incubi');
console.log(fnc) */