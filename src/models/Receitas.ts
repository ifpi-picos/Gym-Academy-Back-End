import { model, Schema } from "mongoose";
import IReceitas from "./interfaces/IReceitas";

const receitasSchema = new Schema<IReceitas>({
   
    nome:{
        type:String
    },
    descricao:{
        type:String
    },
    ingredientes:{
        type:String
    },
    modoDePreparo:{
        type:String
    }
})

export default model<IReceitas>('Receitas',receitasSchema)