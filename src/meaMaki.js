import { makis } from './app/data/makis';
import { liMea } from './liCrea';

const header = document.createElement('div');
header.id = 'header';
const ul2 = document.createElement('ul');


const nmbrand = () => Math.floor(Math.random() * makis.length);

export const meaMaki = (liste) => {
  const h2 = document.createElement('h2');
  h2.innerText = 'Mise en avant';
  const makiId = nmbrand();
  console.log(makiId);
  const maki = liste.filter((m) => m.id === makiId);
  const makiClone = { ...maki };
  ul2.append(liMea(makiClone[0]));

  header.append(h2, ul2);
  return header;
};
