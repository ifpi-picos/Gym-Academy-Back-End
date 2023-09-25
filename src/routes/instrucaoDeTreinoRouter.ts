import { Router,Request,Response } from "express";
import InstrucaoDeTreinoService from "../services/InstrucaoDeTreinoService"

const instrucaoDeTreinoRouter = Router();

instrucaoDeTreinoRouter.post('/nova-instrução', async(req:Request,res:Response)=>{
    try{
        const novaInstrução = await InstrucaoDeTreinoService.novaInstrucaoDeTreino(req.body)
        res.json({Message:'Instrução salva com sucesso!',data:novaInstrução})
    } catch (error) {
        res.json(error)
    }
})

instrucaoDeTreinoRouter.put('/alterar-instrução/:id',async(req:Request,res:Response)=>{
    try{
        const {id} = req.params
        const alterarInstrução = await InstrucaoDeTreinoService.atualizarInstrucaoDeTreino(id,req.body)
        res.json({Message:'Instrução alterada com sucesso!',data:alterarInstrução})
    }   catch (error) {
        res.json(error)
    }
})

instrucaoDeTreinoRouter.post('/deletar-instrução/:id',async(req:Request,res:Response)=>{
    try{
        const {id} = req.params

        await InstrucaoDeTreinoService.deletar(id)
        res.json({Message:'Instrução deletada com sucesso!'})
    }   catch (error) {
        res.json(error)
    }
})

instrucaoDeTreinoRouter.get('/',async(req:Request,res:Response)=>{
    try{
        const instrucaoDeTreino = await InstrucaoDeTreinoService.InstrucaoDeTreino()
        res.json(instrucaoDeTreino)
    }   catch (error) {
        res.json(error)
    }
})

export default instrucaoDeTreinoRouter