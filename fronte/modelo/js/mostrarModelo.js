import {conectaApi} from "./conectaApiModelo.js";

const lista = document.querySelector("[data-lista]");

function constroiModelo(id, modelos_nome, marcas_nome) {
    const modelo = document.createElement("li");
    modelo.className = "list-group-item d-flex justify-content-between align-items-center";
    modelo.innerHTML = `<div>${modelos_nome} - ${marcas_nome}
                <span class="d-flex">
                    <a href="" class="btn btn-primary btn-sm">Alterar</a>
                    <form action="http://localhost/6%20semestre/Parte%202/front/public/api/modelo/${id}" method="delete" class="ms-2">
                        <button class="btn btn-danger btn-sm">Excluir</button>
                    </form>
                </span>
    
    </div>`;
    return modelo;
}

async function listaModelo() {
    const listaApi = await conectaApi.listaModelos();

   // console.log(listaApi);

    listaApi.forEach(elemento => lista.appendChild(constroiModelo(elemento.id, elemento.modelos_nome, elemento.marcas_nome)))    
}


listaModelo();