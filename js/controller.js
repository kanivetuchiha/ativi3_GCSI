import { readFileSync, writeFileSync, existsSync, renameSync } from "fs"
import { dirname } from "path"

// parte erick: persistencia de dados

const carregardados = function(filepath = "dados.json") {
  try {
    if (!existsSync(filepath)) {
      return {}
    }
    const validarDados = readFileSync(filepath, "utf8")
    if (!validarDados.trim()) return {}
    const dados = JSON.parse(validarDados)
    return dados
  } catch (err) {
    throw new Error(`Falha ao carregar '${filepath}': ${err.message}`)
  }
}

const salvarDados = function(dados, filepath = "dados.json", { backup = false } = {}) {
  try {
    const content = JSON.stringify(dados, null, 2)

    const tmpPath = `${filepath}.tmp`
    const backupPath = `${filepath}.bak`

    if (backup && existsSync(filepath)) {
      writeFileSync(backupPath, readFileSync(filepath, "utf8"), "utf8")
    }

    writeFileSync(tmpPath, content, "utf8")
    renameSync(tmpPath, filepath)
    return true
  } catch (err) {

    try {
      if (existsSync(`${filepath}.tmp`)) {

        writeFileSync(`${filepath}.tmp`, "", "utf8")
      }
    } catch (_) {}
    throw new Error(`Falha ao salvar '${filepath}': ${err.message}`)
  }
}

// parte gabriel: cadastro e listagem



export default {}
