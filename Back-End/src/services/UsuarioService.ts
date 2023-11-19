import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/Usuario'

const JWT_SECRET = 'dadwpqoqwmansdsa128364512nakd721bd19sdb';

export class UserService {
  static async createUser(data: { nome: string; email: string; senha: string }) {
    const hashedPassword = await bcrypt.hash(data.senha, 10);
    const user = new UserModel({ ...data, senha: hashedPassword });
    return user.save();
  }

  static async loginUser(email: string, senha: string) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      throw new Error('Senha incorreta');
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
}