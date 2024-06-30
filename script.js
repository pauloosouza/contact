function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //Realizado para fazer a mesma condição abaixo inline

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // Pegar a imagem

  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png") // Usado para troca, alterar um atributo
  } else {
    // Se tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
