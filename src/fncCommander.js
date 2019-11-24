export const commander = () => {
  const nmbMakis = document.getElementsByClassName('divMaki');
  const nmbM = nmbMakis.length;

  document.body.innerHTML = '';
  const h1 = document.createElement('h1');
  h1.innerText = `Votre commande est en cours de livraison. Elle arrivera dans ${nmbM * 6} minutes`;
  document.body.appendChild(h1);
  const btnReload = document.createElement('button');
  btnReload.innerText = 'recharger la page';
  btnReload.addEventListener('click', () => {
    window.location.reload();
  });
  document.body.appendChild(btnReload);
};
