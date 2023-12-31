import { Router,Request,Response } from "express";
import ReceitaService from "../services/ReceitaService";
import validation from "../middlewares/validation";
import Receitas from "../models/Receitas";


const receitaRouter = Router();

receitaRouter.post('/nova-receita',async(req:Request,res:Response)=>{
    try {
        const camposAValidar = [
            'nome',
            'descricao',
            'ingredientes',
            'modoDePreparo',
        ];

        const erros: string[] = [];

        validation.finalizarValidacao(camposAValidar, req, erros);
        const errosFiltrados = erros.filter(erro => erro !== '');

        if (errosFiltrados.length > 0) {
            return res.json({
                Message: 'Campos inválidos',
                Errors: errosFiltrados,
            });
        } 
        else{
        const novaReceita = await ReceitaService.novaReceita(req.body)
        if(novaReceita === null){
            return res.status(400).json({Message:'Receita já Cadastrads!'})
        }
       return res.status(200).json({Message:'receita salva com sucesso!',data:novaReceita})
    }
    } catch (error) {
        return res.status(500).json(error)

    }
})

receitaRouter.put('/alterar-receita/:id',async(req:Request,res:Response)=>{
    try {
         const {id} = req.params
         const camposAValidar = [
            'nome',
            'descricao',
            'ingredientes',
            'modoDePreparo',
        ];

        const erros: string[] = [];

        validation.finalizarValidacao(camposAValidar, req, erros);
        const errosFiltrados = erros.filter(erro => erro !== '');

        if (errosFiltrados.length > 0) {
            return res.json({
                Message: 'Campos inválidos',
                Errors: errosFiltrados,
            });
        } 
        else{

        const alterarReceita = await ReceitaService.atualizarReceita(id,req.body)
        if(alterarReceita === null){
            return res.status(400).json({Message:'Receita já Cadastrada!'})

        }
       return  res.status(200).json({Message:'receita alterada com sucesso!',data:alterarReceita})

        }
    } catch (error) {
        return res.json(error)

    }
})

receitaRouter.delete('/deletar-receita/:id',async(req:Request,res:Response)=>{
    try {
        const {id} = req.params

         await ReceitaService.deletar(id)
     return   res.json({Message:'receita deletada com sucesso!'})
    } catch (error) {
    return    res.json(error)

    }
})

receitaRouter.get('/receitas',async(req:Request,res:Response)=>{
    try {
        const receitas = await ReceitaService.receitas()
    return    res.json(receitas)

    } catch (error) {
    return    res.json(error)

    }
    })
    receitaRouter.delete('/deletar-todas-as-receitas',async(req:Request,res:Response)=>{
        try {
            return await Receitas.deleteMany()
    
        } catch (error) {
            return res.json(error)
    
        }
        })
    export default receitaRouter