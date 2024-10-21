const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual a sua idade² ", (idade) => {
    idade = parseInt(idade)
    if (idade >= 18) {
        console.log("Ja pode se alistar")
    } else {
        console.log("Vai estudar pro enem parça")
    }
})