import { Document } from 'mongoose';

interface IUsuario extends Document {
	nome: string;
	email: string;
	senha: string;
}

export default IUsuario;