import {conectaApi} from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCor(id, cores_nome) {
    const cor = document.createElement("li");
    cor.className = "list-group-item d-flex justify-content-between align-items-center";
    cor.innerHTML = `<div>${cores_nome}
                <span class="d-flex">
                    <a href="" class="btn btn-primary btn-sm">Alterar</a>
                    <form action="http://localhost/6%20semestre/Parte%202/front/public/api/cor/${id}" method="delete" class="ms-2">
                        <button class="btn btn-danger btn-sm">Excluir</button>
                    </form>
                </span>
    
    </div>`;
    return cor;
}

async function listaCor() {
    const listaApi = await conectaApi.listaCores();

   // console.log(listaApi);

    listaApi.forEach(elemento => lista.appendChild(constroiCor(elemento.id, elemento.cores_nome)))    
}


listaCor();