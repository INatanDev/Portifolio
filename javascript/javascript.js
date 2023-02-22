function showHideMenu() {
  const navIcon = document.getElementById("nav-icon2")
  const navegacao = document.getElementById("navegacao")
  
  if (navegacao.style.display == "block") {
    navegacao.style.display = "none";
    navIcon.classList.remove("open")
  } else {
    navegacao.style.display = "block";
    navIcon.classList.add("open")
  }

}