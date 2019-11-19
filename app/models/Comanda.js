import { Schema, Types, model } from "mongoose";

export const comandaSchema = new Schema({
    criadoEm: { type: Date, default: Date.now },
    ultimaAlteracao: { type: Date, defualt: Date.now },
    usuario: { type: Types.ObjectId, ref: "Usuario" },
    estabelecimento: { type: Types.ObjectId, ref: "Estabelecimento" },
    produtos: [{ type: Types.ObjectId, ref: "Produto" }]
});

export default model("Comanda", comandaSchema);