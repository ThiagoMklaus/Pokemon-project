// click no personagem e marcar o botao
// verificar qnd usuario trocar de pokemon nos botoes

const botoes = document.querySelectorAll(".botao");

const pokemom = document.querySelectorAll(".pokemom");

//passo dois, cliclou, botao fica selecionado
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        // verificar se ja existe botao selecionado e remover caso exita outro
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const pokemomSelecionado = document.querySelector(".pokemom.selecionado");
        pokemomSelecionado.classList.remove("selecionado");

       pokemom[indice].classList.add("selecionado");
    });
});