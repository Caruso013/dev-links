function toogleMode() {
  const html = document.documentElement

  if (html.classList.contains("Light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
