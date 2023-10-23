import express from 'express';
import { Request, Response } from 'express';
import { UserService } from '../services/UsuarioService';

const userRouter = express.Router();

userRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { nome, email, senha } = req.body;
    await UserService.createUser({ nome, email, senha });
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    res.status(400).json(error);
  }
});

userRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;
    const token = await UserService.loginUser(email, senha);
    res.json({ token });
  } catch (error) {
    res.status(401).json(error);
  }
});

export default userRouter;