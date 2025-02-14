function fnCarregarDados() {
    const url = "https://api.github.com/users/lucaseduardo583"

fetch(url)
    .then(resposta => resposta.json()) 
    .then(dados => {
        fnMostrardados(dados.avatar_url, dados.name, dados.bio, dados.email, dados.twitter_username, dados.html_url, dados.blog)
    })
}

function fnMostrardados(fotos, nome, resumo, email, twitter, github, blog){
    document.getElementById("foto").src = fotos;
    document.getElementById("nome").innerHTML = nome || "Nome não disponível";
    document.getElementById("resumo").innerHTML = resumo || "Sem descrição";
    document.getElementById("email").innerHTML = email || "E-mail não disponível";
    document.getElementById("twitter").href = twitter ? `https://twitter.com/${twitter}` : "#";
    document.getElementById("github").href = github || "#";
    document.getElementById("blog").href = blog || "#";
}

document.addEventListener("DOMContentLoaded", function() {
    let botao = document.getElementById("botao-carregar-dados");
    if (botao) {
        botao.addEventListener("click", fnCarregarDados);
    } else {
        console.error("Erro: Botão não encontrado.");
    }
});

// let botao = document.getElementById("botao-carregar-dados")
// botao.addEventListener("click", function(){
//     fnCarregarDados()
// })
