const fonts = ["font12", "font14", "font16","font18"];

const colors = ["color1", "color2", "color3","color4"];
  document.addEventListener('DOMContentLoaded', function() {
    
    if(localStorage.getItem("inputdata"))
    {
      const randomfont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomcolor = colors[Math.floor(Math.random() * colors.length)];
      document.getElementById("textwrap").innerHTML=localStorage.getItem("inputdata");
      document.getElementById("textwrap").classList.add(randomfont);
    document.getElementById("textwrap").classList.add(randomcolor);
    }
  });
  document.getElementById("textinput").onkeyup = function() {
    document.getElementById("textwrap").removeAttribute('class');
    
    const randomfont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomcolor = colors[Math.floor(Math.random() * colors.length)];
    
    var input_val=document.getElementById("textinput").value;
    document.getElementById("textwrap").classList.add(randomfont);
    document.getElementById("textwrap").classList.add(randomcolor);
    document.getElementById("textwrap").innerHTML=input_val;
     
     localStorage.setItem("inputdata", input_val);
};