function Addition() {

    var entree_choisie = document.getElementById('entree').value;
    var plat_choisi = document.getElementById('plat').value;
    var dessert_choisi = document.getElementById('dessert').value;

    var e = document.getElementById('entree').value;
    switch (e)
    {
      case 'Charcuterie' : e = 10;
      break;
      case 'Salade cesar': e = 9;
      break;
      case 'J.S.P' : e = 6;
      break;
      default : e = 0;
      break;
    }

    var p = document.getElementById('plat').value;
    switch (p)
    {
      case 'Burgerham': p = 13;
      break;
      case 'Carbonara' : p = 15;
      break;
      case 'Entrecote' : p = 55;
      break;
      default : p = 0;
      break;
    }

    var d = document.getElementById('dessert').value;
    switch (d)
    {
      case 'Flanc': d = 12;
      break;
      case 'Glace' : d = 11;
      break;
      case 'Rose des sables' : d = 10;
      break;
      default : d = 0;
      break;
    }

    var total=parseInt(e)+ parseInt(p) + parseInt(d);

    const aff = document.getElementById("aff")
        aff.textContent = "Entree choisie : " + entree_choisie + " | | Plat choisi : " + plat_choisi +" | | Dessert choisi : " + dessert_choisi;
    const aff1 = document.getElementById("aff1")
        aff1.textContent = "Prix de l'entree: " + e + " euros | | Prix du plat: " + p + " euros | | Prix du dessert: " + d + " euros";
    const aff2 = document.getElementById("aff2")
        aff2.textContent = "Pour la somme de : " + total +" euros";

 /* ("L'entree choisie est:  " + entree_choisie + ", le plat choisi est: " + plat_choisi +" et le dessert choisi est " + dessert_choisi)
  ("Prix de l'entree: " + e + " euros || Prix du plat: " + p + " euros || Prix du dessert: " + d + " euros")
  ("Pour la somme de : " + total +" euros")
  */
}

