import { Router,Request,Response } from "express";
import ReceitaService from "../services/ReceitaService";

const receitaRouter = Router();

receitaRouter.post('/nova-receita',async(req:Request,res:Response)=>{
    try {
         
        const novaReceita = await ReceitaService.novaReceita(req.body)
        res.json({Message:'receita salva com sucesso!',data:novaReceita})
    } catch (error) {
        res.json(error)

    }
})

receitaRouter.put('/alterar-receita/:id',async(req:Request,res:Response)=>{
    try {
         const {id} = req.params
        const alterarReceita = await ReceitaService.atualizarReceita(id,req.body)
        res.json({Message:'receita alterada com sucesso!',data:alterarReceita})
    } catch (error) {
        res.json(error)

    }
})

receitaRouter.delete('/deletar-receita/:id',async(req:Request,res:Response)=>{
    try {
        const {id} = req.params

         await ReceitaService.deletar(id)
        res.json({Message:'receita deletada com sucesso!'})
    } catch (error) {
        res.json(error)

    }
})

receitaRouter.get('/',async(req:Request,res:Response)=>{
    try {
        const receitas = await ReceitaService.receitas()
        res.json(receitas)

    } catch (error) {
        res.json(error)

    }
    })
export default receitaRouter