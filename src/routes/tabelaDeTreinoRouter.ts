import { Router,Request,Response } from "express";
import TabelaDeTreinoService from "../services/TabelaDeTreinoService"

const tabelaDeTreinoRouter = Router();

tabelaDeTreinoRouter.post('/nova-tabela',async(req:Request,res:Response)=>{
    try{
        const novaTabela = await TabelaDeTreinoService.novaTabelaDeTreino(req.body)
        res.json({Mensage:'Tabela salva com sucesso!',data:novaTabela})
    }   catch (error) {
        res.json(error)
    }
})

tabelaDeTreinoRouter.put('/alterar-tabela/:id',async(req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const alterarTabela = await TabelaDeTreinoService.atualizarTabelaDeTreino(id,req.body)
        res.json({Message:'Tabela alterada com sucesso!',data:alterarTabela})
    }   catch (error) {
        res.json(error)
    }
})

tabelaDeTreinoRouter.post('/deletar-tabela/:id',async(req:Request,res:Response)=>{
    try{
        const {id} = req.params
        
        await TabelaDeTreinoService.deletar(id)
        res.json({Message:'Tabela deletada com sucesso!'})
    }   catch (error) {
        res.json(error)
    }
})

tabelaDeTreinoRouter.get('/',async(req:Request,res:Response)=>{
    try{
        const tabelaDeTreino = await TabelaDeTreinoService.TabelasDeTreino()
        res.json(tabelaDeTreino)
    }   catch (error) {
        res.json(error)
    }
})

export default tabelaDeTreinoRouter
