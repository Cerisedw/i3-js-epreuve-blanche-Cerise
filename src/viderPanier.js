export const viderPanier = (nomDeClasse) => {
  const makis = document.getElementsByClassName(nomDeClasse);
  while (makis.length > 0) {
    makis[0].parentNode.removeChild(makis[0]);
  }
};


export const enleverMaki = (event) => {
  const totalMin = document.getElementById('prixTot');
  const prixMaki = parseFloat(event.target.parentNode.children[1].innerText);
  totalMin.innerText = (parseFloat(totalMin.innerText) - prixMaki).toFixed(2);
  const makiClick = event.target.parentNode;
  event.target.parentNode.parentNode.removeChild(makiClick);
};
