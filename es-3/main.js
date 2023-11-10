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