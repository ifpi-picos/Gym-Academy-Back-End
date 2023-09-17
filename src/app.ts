import Express from "express"
import mongoose from "mongoose"
import receitaRouter from "./routes/receitaRouter";

const app = Express()
app.use(Express.json())

app.use('/',receitaRouter) //quando terminar rota vim aki pro app e fazer os outros

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

