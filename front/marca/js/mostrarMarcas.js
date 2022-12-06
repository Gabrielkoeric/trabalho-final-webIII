import {conectaApi} from "./conectaApiMarca.js";

const lista = document.querySelector("[data-lista]");

function constroiMarca(id, marcas_nome) {
    const marca = document.createElement("li");
    marca.className = "list-group-item d-flex justify-content-between align-items-center";
    marca.innerHTML = `<div>${marcas_nome}
                <span class="d-flex">
                    <a href="" class="btn btn-primary btn-sm">Alterar</a>
                    <form action="http://localhost/6%20semestre/Parte%202/front/public/api/marca/${id}" method="delete" class="ms-2">
                        <button class="btn btn-danger btn-sm">Excluir</button>
                    </form>
                </span>
    
    </div>`;
    return marca;
}

async function listaMarca() {
    const listaApi = await conectaApi.listaMarcas();

   // console.log(listaApi);

    listaApi.forEach(elemento => lista.appendChild(constroiMarca(elemento.id, elemento.marcas_nome)))    
}


listaMarca();