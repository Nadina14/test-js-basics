/* Gestione di eventi e elementi DOM  */

window.addEventListener('load', () => {
    const btn = document.getElementById('bottoneInvio');
    btn.addEventListener('click', () => {
        const input = document.getElementById('testoUtente');
        const p = document.getElementById('risultato');
        if(input.value != ''){
            p.innerHTML += input.value;
        }else {
            alert('Inserisci una parola prima di inviare!');
        }
    })
}) 

/* BONUS */
/* window.addEventListener('load', () => {
    const btn = document.getElementById('bottoneInvio');
    btn.addEventListener('click', () => {
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
        const input = document.getElementById('testoUtente');
        const inputUtente = input.value;
        const r = analizzaTesto(inputUtente);
        console.log(r);
        let p = document.getElementById('risultato');
        if(input.value != ''){
            document.body.innerHTML += `<ul><li>${Object.keys(risultato) , Object.values(risultato)}</li><li>${Object.keys(risultato) , Object.values(risultato)}</li><li>${Object.keys(risultato) , Object.values(risultato)}</li></ul>`;
        }else {
            alert('Inserisci una parola prima di inviare!');
        }
    })
}) */