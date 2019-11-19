import { Schema, model } from "mongoose";

export const estabelecimentoSchema = new Schema({
    criadoEm: { type: Date, default: Date.now },
    ultimaAlteracao: { type: Date, default: Date.now },
    nomeFantasia: { type: String, maxlength: 20, required: true },
    razaoSocial: { type: String, maxlength: 50, unique: true },
    cnpj: { type: String, maxlength: 14, unique: true },
    telefone: { type: String, maxlength: 11 }
});

export default model("Estabelecimento", estabelecimentoSchema)