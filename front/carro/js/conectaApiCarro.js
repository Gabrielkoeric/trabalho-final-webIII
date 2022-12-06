async function listaCarros() {
    const conexao = await fetch("http://localhost/6%20semestre/Parte%202/front/public/api/carro");
    const conexaoConvertida = await conexao.json();
    //console.log(conexaoConvertida.data)
    return conexaoConvertida.data;
}

export const conectaApi = {
    listaCarros
}