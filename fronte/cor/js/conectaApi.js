async function listaCores() {
    const conexao = await fetch("http://localhost/6%20semestre/Parte%202/front/public/api/cor");
    const conexaoConvertida = await conexao.json();
    //console.log(conexaoConvertida.data)
    return conexaoConvertida.data;
}

export const conectaApi = {
    listaCores
}