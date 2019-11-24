export const viderPanier = (nomDeClasse) => {
  const makis = document.getElementsByClassName(nomDeClasse);
  console.log(makis[0].parentNode);
  while (makis.length > 0) {
    makis[0].parentNode.removeChild(makis[0]);
  }
};
