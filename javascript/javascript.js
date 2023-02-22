function showHideMenu() {
  const header = document.getElementsByTagName("header")[0]
  const navegacao = document.getElementById("navegacao")
  const menu = document.getElementById("menu")
  
  if (navegacao.style.display == "block") {
    navegacao.style.display = "none";
    header.classList.remove("open")
  } else {
    navegacao.style.display = "block";
    header.classList.add("open")

  }

}