import {conectaApi} from "./conectaApiCarro.js";

const lista = document.querySelector("[data-lista]");

function constroiCarro(id, cores_nome, marcas_nome, modelos_nome) {
    const carro = document.createElement("li");
    carro.className = "list-group-item d-flex justify-content-between align-items-center";
    carro.innerHTML = `<div>${cores_nome} - ${marcas_nome} - ${modelos_nome}
                <span class="d-flex">
                    <a href="" class="btn btn-primary btn-sm">Alterar</a>
                    <form action="http://localhost/6%20semestre/Parte%202/front/public/api/carro/${id}" method="delete" class="ms-2">
                        <button class="btn btn-danger btn-sm">Excluir</button>
                    </form>
                </span>
    
    </div>`;
    return carro;
}

async function listaCarro() {
    const listaApi = await conectaApi.listaCarros();

   // console.log(listaApi);

    listaApi.forEach(elemento => lista.appendChild(constroiCarro(elemento.id, elemento.cores_nome, elemento.marcas_nome, elemento.modelos_nome)))    
}


listaCarro();