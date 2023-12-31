import { Model } from "mongoose";
import InstrucaoDeTreino from "../models/InstrucaoDeTreino";
import IInstrucaoDeTreino from "../models/interfaces/IInstrucaoDeTreino";

class InstrucaoDeTreinoService {
    private instrucaoDeTreino: Model<IInstrucaoDeTreino>
    constructor(){
        this.instrucaoDeTreino = InstrucaoDeTreino
    }
    public async novaInstrucaoDeTreino(InstrucaoDeTreinoData:IInstrucaoDeTreino){
        try{
            
            return await this.instrucaoDeTreino.create(InstrucaoDeTreinoData)
            
        }   catch (error) {
            throw new Error('Erro ao salvar á instrução de treino!')
        }
    }
    public async atualizarInstrucaoDeTreino(id:string,InstrucaoDeTreinoData:IInstrucaoDeTreino){
        try{
            return await this.instrucaoDeTreino.findByIdAndUpdate(id,InstrucaoDeTreinoData)
        }   catch (error) {
            throw new Error('Erro ao atualizar á instrução de treino!')
        }
    }
    public async deletar(id:string){
        try{
            return await this.instrucaoDeTreino.findByIdAndDelete(id)
        }   catch (error) {
            throw new Error('Erro ao deletar á instrução de treino!')
        }
    }
    public async InstrucaoDeTreino(){
        try{
            return await this.instrucaoDeTreino.find()
        }   catch (error) {
            throw new Error('Erro ao listar á instrução de treino!')
        }
    }

    public async getInstrucaoDeTreinoByTipo(tipo: string): Promise<IInstrucaoDeTreino[]> {
        try {
          return await this.instrucaoDeTreino.find({ tipo });
        } catch (error) {
            throw new Error(`Erro ao obter instruções de treino por tipo! Detalhes: ${error}`);
        }
      }
}

export default new InstrucaoDeTreinoService()