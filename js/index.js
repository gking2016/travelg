var m = document.getElementsByClassName("menu")[0];
var nav = document.getElementsByClassName("nav")[0];
var close = document.getElementsByClassName("close")[0];

m.onclick = () => {
  nav.style.width="100%";
  m.style.display = "none";
}
close.onclick = () => {
  nav.style.width="0";
   m.style.display = "block";
}