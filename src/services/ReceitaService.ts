import { Model } from "mongoose";
import Receitas from "../models/Receitas";
import IReceitas from "../models/interfaces/IReceitas";

class ReceitaService {
    private receita: Model<IReceitas>
    constructor(){
        this.receita = Receitas
    }
    public async novaReceita(receitaData:IReceitas){
        try {
            const novaReceita = await this.receita.create(receitaData)
            return novaReceita
        } catch (error) {
            throw new Error('Erro ao salvar á receita!')
        }
    }
    public async atualizarReceita(id:string,receitaData:IReceitas){
        try {
            return await this.receita.findByIdAndUpdate(id,receitaData)
        } catch (error) {
            throw new Error('Erro ao atualizar á receita!')

        }
    }
    public async deletar(id:string){
        try {
           return await this.receita.findByIdAndDelete(id)
        } catch (error) {
            throw new Error('Erro ao deletar á receita!')

        }
    }
    public async receitas(){
        try {
            return await this.receita.find()
        } catch (error) {
            throw new Error('Erro ao listar as receitas!')

        }
    }
}

export default new ReceitaService()