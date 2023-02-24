function showHideMenu() {
  const header = document.getElementsByTagName("header")[0]
  const navegacao = document.getElementById("navegacao")
  const menu = document.getElementById("menu")
  const footer = document.getElementsByTagName("footer")[0]
  
  if (navegacao.style.display == "block") {
    navegacao.style.display = "none";
    header.classList.remove("open")
    footer.classList.remove("open")
  } else {
    navegacao.style.display = "block";
    header.classList.add("open")
    footer.classList.add("open")

  }

}