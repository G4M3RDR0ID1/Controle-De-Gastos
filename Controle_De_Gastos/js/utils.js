//Funçoes utilitarias
const obeterElemento = (id) => document.getElementById(id);
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',')
//funçoes puras
export const valorNegativo = (valor) => valor < 0;

export const atualizaInterface = (gastosPorCategoria) =>{

    const categorias = gastosPorCategoria.categorias;


    categorias.forEach(({nome, valor}) => {
        const elemento = obeterElemento(nome)
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
    });

    const elementoTotal = obeterElemento("Total")
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`
}