import { Schema, model } from "mongoose";

export const produtoSchema = new Schema({
    criadoEm: { type: Date, default: Date.now },
    ultimaAlteracao: { type: Date, default: Date.now },
    nome: { type: String, maxlength: 50, required: true },
    descricao: { type: String, maxlength: 500 },
    valor: { type: Number }
});

export default model("Produto", produtoSchema);