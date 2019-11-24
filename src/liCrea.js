import { getMaki } from './panierCrea';

const app = document.getElementById('app');
const ul = document.createElement('ul');

const ajoutPanier = (e) => {
  const idMaki = e.target.id.substring(3);
  getMaki(idMaki);
};


export const liC = (obj) => {
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const desc = document.createElement('p');
  const prix = document.createElement('p');
  const img = document.createElement('img');
  const btn = document.createElement('button');
  btn.id = `btn${obj.id}`;
  btn.innerText = 'acheter';
  btn.addEventListener('click', ajoutPanier);
  h3.innerText = `${obj.nom}`;
  desc.innerText = obj.description;
  prix.innerText = `prix : ${obj.prix * 8} | prix à l'unité : ${obj.prix}`;
  img.src = `${obj.image}`;

  li.append(h3, btn, desc, prix, img);
  return li;
};

export const createListe = (liste) => {
  liste.forEach((obj) => {
    const objClone = { ...obj };
    ul.append(liC(objClone));
  });
  app.append(ul);
};


export const liMea = (obj) => {
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const desc = document.createElement('p');
  const prix = document.createElement('p');
  const img = document.createElement('img');
  h3.innerText = `${obj.nom}`;
  desc.innerText = obj.description;
  prix.innerText = `prix : ${obj.prix * 8} | prix à l'unité : ${obj.prix}`;
  img.src = `${obj.image}`;

  li.append(h3, desc, prix, img);
  return li;
};
