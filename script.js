function toggleMode() { 
const html = document.documentElement

if(html.classList.contains("Light")){
    html.classList.remove("Light")
}else{
    html.classList.add("Light")
}

//Trocar a imagem

//pegar a imagem
const img = document.querySelector("#profile img")

//trocar as imagens, se estiver com o light mode
if(html.classList.contains("Light")){
    img.setAttribute("src", "assets/assets/avatar-light.png")
    img.setAttribute("alt", "Imagem MykeBrito Light Mode")
//Trocar se estiver sem o Light mode
} else{
    img.setAttribute("src", "assets/assets/avatar.png")
    img.setAttribute("alt", "Imagem MykeBrito Dark Mode")
}



}