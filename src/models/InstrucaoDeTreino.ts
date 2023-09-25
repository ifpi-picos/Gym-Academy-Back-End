import { Model, Schema, model } from "mongoose";
import IInstrucaoDeTreino from "./interfaces/IInstrucaoDeTreino";

const instrucaoDeTreinoSchema = new Schema<IInstrucaoDeTreino>({

    gif:{
        type:String
    },
    nomeDoTreino:{
        type:String
    },
    descricao:{
        type:String
    },
    comoExecutar:{
        type:String
    },
})

export default model<IInstrucaoDeTreino>('instrucaoDeTreino',instrucaoDeTreinoSchema)