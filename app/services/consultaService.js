import { Types } from "mongoose";

export default class ServicoConsulta {
    constructor(model) {
        this.Get = async (query, fields) => await model.find(query, fields);

        this.GetById = async (id) => await model.findById(id);
        
        this.Post = async (data) => {
            var entidade = new model(data);
            await entidade.save();
            return entidade;
        };

        this.Put = async (id, data) => await model.updateOne({ _id: Types.ObjectId(id) }, { $set: data });

        this.Delete = async (id) => await model.findByIdAndDelete(id);
    }
}