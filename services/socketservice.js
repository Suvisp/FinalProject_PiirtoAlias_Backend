/*TÄHÄN TIEDOSTOON TULEE JOSKUS SOCKETIN TARVITSEMAT ARPOMISFUNKTIOT, heti kun Niina keksii miten ne siirretään nätisti

Piirtovuoron arvo on tietokannassa boolean, joten arpomisfunktion tuloksena tulis result = true,
eli lähtökohtaisesti kaikilla oli sitten false eli ei vuoroa laisinkaan. 
Arpomisfunktio pitää kutsua ilmeisesti kun 
    1) ensimmäinen henkilö liittyy ja 
    2) saadaan mätchi arvottuun sanaan

Nämä siis if lauseilla
sitten arvottava sana lähetetään privaviestillä 
siihen socket.id jonka arvo on tietokannan mukaan true (eli piirtovuorossa). 



let sio = require('../bin/www')

function resolveAfter4Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( [ sio.socketid ] );
        }, 4000);
    });
}

async function arpoa() {
    let soketit = await resolveAfter4Seconds() ;
    const vuorossaID = soketit[Math.floor(Math.random() * soketit.length)];
    console.log("vuorossa on "+ vuorossaID)
}

arpoa();

module.exports = { vuorossaID }

*/