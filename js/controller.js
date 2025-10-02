import { readFileSync, writeFileSync } from "fs"

const carregardados = function(){

    const dados = JSON.parse(readFileSync("dados.json", "utf8")) 
    return dados
}

const salvarDados = function(dados){

    writeFileSync("dados.json", "")  
    writeFileSync("dados.json", JSON.stringify(dados, null, 2))
}

export default {}
