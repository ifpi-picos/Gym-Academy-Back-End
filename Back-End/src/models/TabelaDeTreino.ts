import { Model, Schema, model } from "mongoose";
import ITabelaDeTreino from "./interfaces/ITabelaDeTreino";

const tabeladetreinoSchema = new Schema <ITabelaDeTreino> ({
    nomeExercicio:{
        type:String

    },
    numeroDeSerie:{
        type:Number

    },
    numeroDeRepeticao:{
        type:Number
        
    },
})

export default model<ITabelaDeTreino>('TabelaDeTreino',tabeladetreinoSchema)