import { Document } from "mongoose";

interface ITabelaDeTreino extends Document {
    nomeExercicio:string
    numeroDeSerie:number
    numeroDeRepeticao:number
}

export default ITabelaDeTreino