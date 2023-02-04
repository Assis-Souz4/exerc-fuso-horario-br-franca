const formulario = document.querySelector("form")
const respFuso = document.querySelector("h3")

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()
    //obtem e converte o conteudo inHoraBr
    let horaBr = Number(formulario.inHoraBr.value)
    let horaFranca = horaBr +5;

    if (horaFranca > 24) {
        horaFranca = horaFranca -24
    }
    respFuso.style.color = "blue";
    respFuso.innerText = `Fuso na França: ${horaFranca.toFixed(2)} (h.m)`
})