import { Router,Request,Response } from "express";
import IntrucaoDeTreinoService from "../services/InstrucaoDeTreinoService"
import validation from "../middlewares/validation";
import InstrucaoDeTreino from "../models/InstrucaoDeTreino";
import InstrucaoDeTreinoService from "../services/InstrucaoDeTreinoService";

const instrucaoDeTreinoRouter = Router();

instrucaoDeTreinoRouter.post('/nova-instrucaoDeTreino',async(req:Request,res:Response)=>{
    try {
        const camposAValidar = [
            'gif',
            'nomeDoTreino',
            'descricao',
            'comoExecutar',
            'tipo',
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
        const novaInstrucaoDeTreino = await IntrucaoDeTreinoService.novaInstrucaoDeTreino(req.body)
       
       return res.status(200).json({Message:'Instrução de treino salva com sucesso!',data:novaInstrucaoDeTreino})
    }
    } catch (error) {
        return res.status(500).json(error)

    }
})

instrucaoDeTreinoRouter.put('/alterar-instrucaoDeTreino/:id',async(req:Request,res:Response)=>{
    try {
         const {id} = req.params
         const camposAValidar = [
            'nomeDoTreino',
            'descricao',
            'comoExecutar',
            'tipo',
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

        const alterarInstrucaoDeTreino = await IntrucaoDeTreinoService.atualizarInstrucaoDeTreino(id,req.body)
        if(alterarInstrucaoDeTreino === null){
            return res.status(400).json({Message:'Instrução de Treino já Cadastrads!'})

        }
       return  res.status(500).json({Message:'Instrução de Treino alterada com sucesso!',data:alterarInstrucaoDeTreino})

        }
    } catch (error) {
    return   res.json(error)

    }
})

instrucaoDeTreinoRouter.delete('/deletar-instrucaoDeTreino/:id',async(req:Request,res:Response)=>{
    try {
        const {id} = req.params

         await IntrucaoDeTreinoService.deletar(id)
    return  res.json({Message:'Instrução deletada com sucesso!'})
    } catch (error) {
    return    res.json(error)

    }
})

instrucaoDeTreinoRouter.get('/treinos',async(req:Request,res:Response)=>{
    try {
        const instrucaoDeTreino = await IntrucaoDeTreinoService.InstrucaoDeTreino()
     return   res.json(InstrucaoDeTreino)

    } catch (error) {
    return    res.json(error)

    }
    })

instrucaoDeTreinoRouter.get('/treinos-por-tipo/:tipo', async (req: Request, res: Response) => {
        try {
          const { tipo } = req.params;
          const instrucoesPorTipo = await InstrucaoDeTreinoService.getInstrucaoDeTreinoByTipo(tipo);
      
          return res.status(200).json(instrucoesPorTipo);
        } catch (error) {
            return res.status(500).json({ Message: "Houve um erro interno!" })
        }
      });

    export default instrucaoDeTreinoRouter