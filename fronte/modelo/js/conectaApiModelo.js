async function listaModelos() {
    const conexao = await fetch("http://localhost/6%20semestre/Parte%202/front/public/api/modelo");
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida)
    return conexaoConvertida.data;
}

export const conectaApi = {
  listaModelos
}