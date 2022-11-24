const fonts = ["font12", "font14", "font16","font18"];

/**
 * [Romain] Ton code marche, mais ne respecte pas complètement les consignes.
 * Il était notamment attendu que chaque lettre ait une taille différente.
 */

const colors = ["color1", "color2", "color3","color4"];
  document.addEventListener('DOMContentLoaded', function() {

    // [Romain] tu pourrais stocker ça dans une variable...
    if(localStorage.getItem("inputdata"))
    {
      const randomfont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomcolor = colors[Math.floor(Math.random() * colors.length)];
      // [Romain] ...et réutiliser la variable ici
      document.getElementById("textwrap").innerHTML=localStorage.getItem("inputdata");
      document.getElementById("textwrap").classList.add(randomfont);
      /**
       * [Romain] Tu réutilises plein de fois document.getElementById("textwrap"),
       * ça vaut le coup d'en faire une variable
       */
    document.getElementById("textwrap").classList.add(randomcolor);
    }
  });

  /**
   * [Romain] Il est préférable (car plus polyvalent) d'utiliser .addEventListener().
   * De plus, dans ce cas l'évènement à écouter est plutot "input", pour pouvoir
   * accéder à la valeur de l'input sans refaire document.getElementById("textinput")
   */
  document.getElementById("textinput").onkeyup = function() {
    // [Romain] je ne suis pas sur de l'intérêt de cette ligne
    document.getElementById("textwrap").removeAttribute('class');
    const randomfont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomcolor = colors[Math.floor(Math.random() * colors.length)];

    /**
     * [Romain] Oublie var, ici const fonctionne plutot.
     *
     * Si tu avais utilisé l'évènement input plutôt que keyup,
     * tu aurais un accès plus direct à la valeur via e.target.value
     */
    var input_val=document.getElementById("textinput").value;
    document.getElementById("textwrap").classList.add(randomfont);
    document.getElementById("textwrap").classList.add(randomcolor);
    document.getElementById("textwrap").innerHTML=input_val;

     localStorage.setItem("inputdata", input_val);
};
