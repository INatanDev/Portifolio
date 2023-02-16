function showHideMenu() {
  if (document.getElementById("menu").innerHTML == "X") {
    document.getElementById("menu").innerHTML = "&#9776";
    document.getElementById("navegacao").style.display = "none";
  } else {
    document.getElementById("menu").innerHTML = "X";
    document.getElementById("navegacao").style.display = "block";
  }
}
