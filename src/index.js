import { makis } from './app/data/makis';
import { createListe } from './liCrea';
import { meaMaki } from './meaMaki';
import { viderPanier } from './viderPanier';
import { commander } from './fncCommander';

// const header = document.createElement('div');
// header.id = 'header';


const header = document.createElement('header');
document.body.prepend(header);

const footer = document.createElement('footer');
document.body.appendChild(footer);

const listeSushi = makis;

header.append(meaMaki(listeSushi));

createListe(listeSushi);

// footer

const panier = document.createElement('div');
panier.id = 'panier';
const h2 = document.createElement('h2');
h2.innerText = 'Mon Panier';

const tot = document.createElement('h3');
tot.id = 'prixTot';
tot.innerText = '0';
panier.appendChild(h2);
panier.appendChild(tot);
footer.appendChild(panier);


const cleanPanier = document.createElement('button');
cleanPanier.id = 'btnClean';
cleanPanier.innerText = 'Vider le panier';
cleanPanier.addEventListener('click', () => {
  viderPanier('divMaki');
  tot.innerText = '0';
});

footer.appendChild(cleanPanier);


// bouton commander

const btnCommander = document.createElement('button');
btnCommander.id = 'btnCommander';
btnCommander.innerText = 'Commander';
btnCommander.addEventListener('click', commander);
footer.appendChild(btnCommander);
