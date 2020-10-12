
const avengers = document.getElementById("avengers");
const batman = document.getElementById("batman");
const harry_potter = document.getElementById("harry_potter");
const radioNom = document.getElementById("nom");
const radioPrenom = document.getElementById("prenom");

const btnAffiche = document.getElementById("btnAffiche");
const message = document.querySelector(".message");
const liste = document.querySelector(".liste");
let tabHtml = "<table><tr><th>Nom</th><th>Prénom</th></tr>";

btnAffiche.addEventListener('click',affichage);
function affichage(){
  if(!avengers.checked && !batman.checked && !harry_potter.checked){
    let paragraphe = document.createElement('p');
    paragraphe.textContent ="Pas de résultat";
    message.appendChild(paragraphe);

  }
  else{
    let paragraphe = document.createElement('p');
    paragraphe.textContent ="Chargement en cours...";
    message.appendChild(paragraphe);
    let tableau = checkboxPersonnage();
    console.log(tableau);

    for(const elem of tableau){
      tabHtml += '<tr><td>elem.lastName</td><td>elem.firstName</td></tr>';
    }
    tabHtml += '</table>';
    liste.innerHTML = tabHtml;

  }
};

let checkboxPersonnage = async ()=>{
  let tableau=[];
  if(avengers.checked){

    try{
      let avengersList = await fetch('avengers.json');
     if(!avengersList.ok){
       throw new Error(`HTTP error! status:${avengersList.status}`);
     }
     else{
        avengersList =await avengersList.json();
        tableau.push(avengersList);
     }

    }
    catch(e){
      console.log(e);
    }
  }

  if(batman.checked){

    try{
      let avengersList = await fetch('batman.json');
     if(!avengersList.ok){
       throw new Error(`HTTP error! status:${avengersList.status}`);
     }
     else{
        avengersList =await avengersList.json();
        tableau.push(avengersList);
     }

    }
    catch(e){
      console.log(e);
    }
  }

  if(harry_potter.checked){

    try{
      let avengersList = await fetch('harry_potter.json');
     if(!avengersList.ok){
       throw new Error(`HTTP error! status:${avengersList.status}`);
     }
     else{
       avengersList =await avengersList.json();
        tableau.push(avengersList);
     }

    }
    catch(e){
      console.log(e);
    }
  }
console.log(tableau);

  return tableau;
}

function triParNom (tab) {
  tab.sort(function(a,b){
    if(a.lastName > b.lastName){
      return 1;
    }
    if(a.lastName < b.lastName){
      return -1
    }
    else{
       return 0;
    }

  });
  return tab;
}


function triParPrenom (tab) {
  tab.sort(function compare(a,b){
    if(a.firstName >b.firstName){
      return 1;
    }
    if(a.firstName <b.firstName){
      return -1;
    }
    else{
      return 0;
    }
  });
  return tab;
}
