/* Gestione di eventi e elementi DOM  */

window.addEventListener('load', () => {
    const btn = document.getElementById('bottoneInvio');
    btn.addEventListener('click', () => {
        const input = document.getElementById('testoUtente');
        const valore = input.value;
        if(valore === ''){
            alert('Inserisci del testo prima di inviare!');
        }else {
            const p = document.createElement('p');
            p.innerText = valore;
            document.body.appendChild(p);
            input.value = '';
        };
    });
}); 

/* BONUS 
window.addEventListener('load', () => {
    const btn = document.getElementById('bottoneInvio');
    btn.addEventListener('click', () => {
        const input = document.getElementById('testoUtente');
        const valore = input.value;
        if(valore === ''){
            alert('Inserisci del testo prima di inviare!');
        }else {
            const p = document.createElement('p');
            const testoAnalizzato = analizzaTesto(valore);
            const coppieChiaveValore = Object.entries(testoAnalizzato);
            const ul = document.createElement('ul');
            for(let i = 0; i < coppieChiaveValore.length; i++){
                const coppia = coppieChiaveValore[i];
                const chiave = coppia[0];
                const valore = coppia[1];
                const li = document.createElement('li');
                li.innerText = `${chiave}: ${valore}`;
                ul.appendChild(li);
            };
            p.appendChild(ul);
            document.body.appendChild(p);
            input.value = '';
        };
    });
}); */