import { Schema, model } from "mongoose";

export const usuarioSchema = new Schema({
    criadoEm: { type: Date, default: Date.now },
    ultimaAlteracao: { type: Date, default: Date.now },
    nome: { type: String, required: true, maxlength: 20 },
    sobrenome: { type: String, maxlength: 50 },
    email: { type: String, maxlength: 50, unique: true },
    senha: { type: String },
    telefone: { type: String, maxlength: 11 },
    cpf: { type: String, maxlength: 11, unique: true }
});

export default model("Usuario", usuarioSchema);