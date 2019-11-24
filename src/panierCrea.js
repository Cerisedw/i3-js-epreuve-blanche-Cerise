import { makis } from './app/data/makis';


const creaPanier = (obj) => {
  const divMaki = document.createElement('div');
  divMaki.className = 'divMaki';
  const nomMaki = document.createElement('p');
  const total = document.getElementById('prixTot');
  const result = parseFloat(total.innerText) + (obj.prix * 8);
  total.innerText = result.toFixed(2);
  nomMaki.innerText = obj.nom;
  const prix = document.createElement('p');
  prix.className = 'prixMaki';
  prix.innerText = obj.prix * 8;
  divMaki.append(nomMaki, prix);
  return divMaki;
};


export const getMaki = (idString) => {
  const panier = document.getElementById('panier');
  const idNmb = parseInt(idString, 10);
  const maki = makis.filter((m) => m.id === idNmb);
  console.log(maki);
  panier.appendChild(creaPanier(maki[0]));
};
