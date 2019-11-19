import { GerarErro, ParseErro } from '../services/erroService';

export default class EntidadeBaseController {
    constructor(servico) {
        this.Get = async (req, res) => {
            try {
                let { fields, ...query } = req.query;
                var retorno = await servico.Get(query, fields);
                res.status(200).json(retorno)
            } catch (error) {
                res.status(422).json(ParseErro(error));
            }
        };

        this.GetById = async (req, res) => {
            try {    
                var id = req.params.id;
                if(!id) return res.status(422).json(GerarErro("Favor informar o ID"))

                var retorno = await servico.GetById(id);

                res.status(200).json(retorno);
            } catch (error) {
                res.status(422).json(ParseErro(error));
            }
        };

        this.Post = async (req, res) => {
            try {
                var retorno = await servico.Post(req.body);

                res.status(201).json(retorno);
            } catch (error) {
                res.status(422).json(ParseErro(error));
            }
        };

        this.Put = async (req, res) => {
            try {
                var id = req.params.id;
                if(!id) return res.status(422).json(GerarErro("Favor informar o ID"))

                var existe = await servico.Get(id);
                if(!existe) return res.status(422).json(GerarErro("Registro não encontrado"));

                var atualizado = Object.assign({}, existe, req.body);
                var retorno = await servico.Put(id, atualizado);
                res.status(200).json(retorno);
            } catch (error) {
                res.status(422).json(ParseErro(error));
            }
        };

        this.Delete = async (req, res) => {
            try {
                var id = req.params.id;
                if(!id) return res.status(422).json(GerarErro("Favor informar o ID"))

                var retorno = await servico.Delete(id);
                if(!retorno) return res.status(422).json(GerarErro("Erro ao excluir o registro"))

                return res.status(200).json(retorno);
            } catch (error) {
                res.status(422).json(ParseErro(error));
            }
        }
    }
}