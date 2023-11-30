import { Router,Request,Response } from "express";
import TabelaDeTreinoService from "../services/TabelaDeTreinoService"
import validation from "../middlewares/validation";
import TabelaDeTreino from "../models/TabelaDeTreino";

const tabelaDeTreinoRouter = Router();

tabelaDeTreinoRouter.post('/nova-tabelaDeTreino',async(req:Request,res:Response)=>{
    try {
        const camposAValidar = [
            'nomeExercicio',
            'numeroDeSerie',
            'numeroDeRepeticao',
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
        const novaReceita = await TabelaDeTreinoService.novaTabelaDeTreino(req.body)
        if(novaReceita === null){
            return res.status(400).json({Message:'Tabela já cadastrada!'})
        }
       return res.status(200).json({Message:'Tabela salva com sucesso!',data:novaReceita})
    }
    } catch (error) {
        return res.status(500).json(error)

    }
})

tabelaDeTreinoRouter.put('/alterar-tabelaDeTreino/:id',async(req:Request,res:Response)=>{
    try {
         const {id} = req.params
         const camposAValidar = [
            'nomeExercicio',
            'numeroDeSerie',
            'numeroDeRepeticao',
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

        const alterarTabelaDeTreino = await TabelaDeTreinoService.atualizarTabelaDeTreino(id,req.body)
        if(alterarTabelaDeTreino === null){
            return res.status(400).json({Message:'Tabela já Cadastrads!'})

        }
       return  res.status(500).json({Message:'Tabela alterada com sucesso!',data:alterarTabelaDeTreino})

        }
    } catch (error) {
    return    res.json(error)

    }
})

tabelaDeTreinoRouter.delete('/deletar-tabelaDeTreino/:id',async(req:Request,res:Response)=>{
    try {
        const {id} = req.params

         await TabelaDeTreinoService.deletar(id)
    return  res.json({Message:'Tabela deletada com sucesso!'})
    } catch (error) {
    return    res.json(error)

    }
})

tabelaDeTreinoRouter.get('/',async(req:Request,res:Response)=>{
    try {
        const TabelaDeTreino = await TabelaDeTreinoService.TabelasDeTreino()
     return   res.json(TabelaDeTreino)

    } catch (error) {
    return    res.json(error)

    }
    })

    export default tabelaDeTreinoRouter
