function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a image
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-Light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar-Dark.png")
  }
}
//f