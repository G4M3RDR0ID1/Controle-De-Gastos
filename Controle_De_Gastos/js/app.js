
//Modularizaçao (ES Modules)
import { Categoria, ListaGastoPorCategoria } from "./classes.js";
import { valorNegativo, atualizaInterface } from "./utils.js";
//POO

const gastosPorCategoria = new ListaGastoPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
)


//Manipulaçao do Dom
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) =>{
    //Prevençao do comportamento padrao
    evento.preventDefault();


    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;
  
    if(valorNegativo(valorInformado) || isNaN(valorInformado)){
        alert("Valor invalido. O valor não pode ser negativo.")
        return
    }

  
    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);



    atualizaInterface(gastosPorCategoria);
    formulario.reset();
})
