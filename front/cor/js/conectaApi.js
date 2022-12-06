async function listaCores() {
    const conexao = await fetch("http://localhost/6%20semestre/Parte%202/front/public/api/cor");
    const conexaoConvertida = await conexao.json();
    //console.log(conexaoConvertida.data)
    return conexaoConvertida.data;
}

async function criaCor(cores_nome){
    const conexao = await fetch("http://localhost/6%20semestre/Parte%202/front/public/api/cor",{
        method: "POST",
        headers:{
            "content-type": "aplication/json"
        },
        body: JSON.stringify({
            cores_nome: cores_nome
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida.data
}

export const conectaApi = {
    listaCores,
    criaCor
}