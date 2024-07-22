const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function ciqueiNaMascara(){
    form.style.left="-300px"
    mascara.style.visibility = "hidden"
    form.style.transform = "translateX(0)"
}
