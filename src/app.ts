import Express from "express"
import mongoose from "mongoose"
import receitaRouter from "./routes/receitaRouter";
import tabelaDeTreinoRouter from "./routes/tabelaDeTreinoRouter";
import instrucaoDeTreinoRouter from "./routes/instrucaoDeTreinoRouter";

const app = Express()
app.use(Express.json())

app.use('/',receitaRouter) 
app.use('/',tabelaDeTreinoRouter)
app.use('/',instrucaoDeTreinoRouter)

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

