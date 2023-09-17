import { Model, model } from "mongoose"
import TabelaDeTreino from "../models/TabelaDeTreino"
import ITabelaDeTreino from "../models/interfaces/ITabelaDeTreino"

class TabelaDeTreinoService {
    private tabelaDeTreino: Model<ITabelaDeTreino>
    constructor(){
        this.tabelaDeTreino = TabelaDeTreino
    }
    public async novaTabelaDeTreino(TabelaDeTreinoData:ITabelaDeTreino){
        try{
            const novaTabelaDeTreino = await this.tabelaDeTreino.create(TabelaDeTreinoData)
            return novaTabelaDeTreino
        }   catch (error) {
            throw new Error('Erro ao salvar á tabela de treino!')
        }
     }
     public async atualizarTabelaDeTreino(id:string,TabelaDeTreinoData:ITabelaDeTreino){
        try{
            return await this.tabelaDeTreino.findByIdAndUpdate(id,TabelaDeTreinoData)
        } catch (error) {
            throw new Error('Erro ao atualizar á tabela de treino')
        }
     }
     public async deletar(id:string){
        try{
            return await this.tabelaDeTreino.findByIdAndDelete(id)
        } catch (error) {
            throw new Error('Erro ao deletar á tabela de treino')
        }
     }
     public async TabelasDeTreino(){
        try{
        return await this.tabelaDeTreino.find()
        } catch (error) {
            throw new Error('Erro ao listar á tabela de treino')
        }
    }
}

export default new TabelaDeTreinoService()