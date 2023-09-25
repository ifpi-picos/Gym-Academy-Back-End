import { Document } from "mongoose";

interface IInstrucaoDeTreino extends Document {
    gif:String
    nomeDoTreino:String
    descricao:String
    comoExecutar:String
}

export default IInstrucaoDeTreino