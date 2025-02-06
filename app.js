function fnCarregarDados(){
const url = "https://api.github.com/users/lucaseduardo583"

fetch(url)
    .then(resposta=>{
        return resposta.json()
    })
    .then(data=>{
        console.dir(dados)
    })
}

