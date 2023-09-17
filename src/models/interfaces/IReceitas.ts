import { Document } from "mongoose"

interface IReceitas extends Document {
    imagem:string
    nome:string
    descricao:string
    ingredientes:string
    modoDePreparo:string
}

export default IReceitas
