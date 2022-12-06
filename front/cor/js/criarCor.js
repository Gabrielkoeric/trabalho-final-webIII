import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criaCor(evento){
    evento.preventDefault();

    const cores_nome = document.querySelector("[data-cor]").value;

    await conectaApi.criaCor(cores_nome);

    window.location.href = "./cor.html"
}

formulario.addEventListener("submit", evento => criaCor(evento));