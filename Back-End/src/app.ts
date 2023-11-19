import Express from "express"
import mongoose from "mongoose"
import receitaRouter from "./routes/receitaRouter";
import tabelaDeTreinoRouter from "./routes/tabelaDeTreinoRouter";
import instrucaoDeTreinoRouter from "./routes/instrucaoDeTreinoRouter";
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json'
import userRouter from "./routes/usuarioRouter";
import cors from 'cors';

const app = Express()
app.use(Express.json())

app.use('/',receitaRouter) 
app.use('/tabelaDeTreino',tabelaDeTreinoRouter)
app.use('/',instrucaoDeTreinoRouter)
app.use('/',userRouter)
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs),
);
app.use(cors());
mongoose.Promise = global.Promise
mongoose
      .connect(
        `mongodb+srv://user404777:user2023lz044bd@cluster0.rlzjnlh.mongodb.net/?retryWrites=true&w=majority`,
        {},
      )
      .then(() => {
        console.log('conectado ao banco!');
      })
      .catch(err => {
        console.log('erro ao se conectar ao banco ' + err);
      });



app.listen(5000,()=>{
    console.log('servidor rodando na porta:' + 5000)
})

