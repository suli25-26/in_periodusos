/*
* File: app.js
* Author: Erős István
* Copyright: 2026, Erős István
* Group: Szoft IN
* Date: 2026-04-29
* Github: https://github.com/pista12345/
* Licenc: MIT
*/

import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Swal from 'sweetalert2'

const kemiaiElemek = [
  { nev: 'Hidrogén', vegyjel: 'H', rendszam: 1, atomtomeg: 1.008, allapot: 'Gáz' },
  { nev: 'Hélium', vegyjel: 'He', rendszam: 2, atomtomeg: 4.003, allapot: 'Gáz' },
  { nev: 'Lítium', vegyjel: 'Li', rendszam: 3, atomtomeg: 6.94, allapot: 'Szilárd' },
  { nev: 'Szén', vegyjel: 'C', rendszam: 6, atomtomeg: 12.011, allapot: 'Szilárd' },
  { nev: 'Nitrogén', vegyjel: 'N', rendszam: 7, atomtomeg: 14.007, allapot: 'Gáz' },
  { nev: 'Oxigén', vegyjel: 'O', rendszam: 8, atomtomeg: 15.999, allapot: 'Gáz' },
  { nev: 'Fluor', vegyjel: 'F', rendszam: 9, atomtomeg: 18.998, allapot: 'Gáz' },
  { nev: 'Neon', vegyjel: 'Ne', rendszam: 10, atomtomeg: 20.180, allapot: 'Gáz' }
];

const doc = {
    tbody: document.querySelector('#tbody'),
    resultDiv: document.querySelector('#result'),
    aboutButton: document.querySelector('#aboutButton')
}

doc.aboutButton.addEventListener('click', () => {
    startAbout()
})

function startAbout() {
    Swal.fire({
        title: 'Névjegy',
        text: 'Erős István, NI, 2026-04-29'
    })
}

function render(elemek) {
    var rows = '';
    for(const elem of elemek) {
        console.log(elem.nev)
        var text = ''
        if(elem.rendszam<5) {
            text = 'Könnyű elem'
        }
        var row = `
            <tr>
                <td>
                    ${elem.nev} 
                    <span class="badge text-bg-success">${text}</span>
                </td>
                <td>${elem.vegyjel}</td>
                <td>${elem.rendszam}</td>
                <td>${elem.atomtomeg}</td>
                <td>${elem.allapot}</td>
            </tr>
        `
        rows += row
    }
    doc.tbody.innerHTML = rows;
}

function renderCountedValue(elemek) {
    let count = 0;
    for(let elem of elemek) {
        if(elem.allapot == 'Gáz') {
            count++
        }
    }
    console.log('count: ', count)
    let msg = 'Gáz állapotú elemek: '
    doc.resultDiv.innerHTML = msg + count
}

render(kemiaiElemek)
renderCountedValue(kemiaiElemek)
