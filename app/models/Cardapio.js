import { Schema, Types, model } from "mongoose";

export const cardapioSchema = new Schema({
    criadoEm: { type: Date, default: Date.now },
    ultimaAlteracao: { type: Date, default: Date.now },
    nome: { type: String, maxlength: 50 },
    estabelecimento: { type: Types.ObjectId, ref: "Estabelecimento" },
    produtos: [{ type: Types.ObjectId, ref: "Produto" }]
});

export default model("Cardapio", cardapioSchema);