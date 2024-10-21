const fs = require("fs")
fs.readFile("teste.txt", "utf8", (erro, dados) => {
    if (erro){
        console.log(erro)
    }else {
        console.log(dados)
    }
})
const mensagem = "abobora"
const mensagem2 = "mamão"

fs.appendFile("teste2oretorno.txt", mensagem, "utf8", (erro)=>{
    if(erro){
        console.log("deu erro")
    }else{
        console.log("deu certo gay")
    }
})
fs.writeFile("teste2oretorno.txt", mensagem2, "utf8", (erro)=>{
    if(erro){
        console.log("deu erro")
    }else{
        console.log("deu certo gay")
    }
})
fs.unlink("teste2oretorno.txt", (erro)=>{
    if(erro){
        console.log("deu erro")
    }else{
        console.log("deu certo gay")
    }
})

