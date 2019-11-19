import EntidadeBaseController from "./entidadeBaseController";
import UsuarioService from '../services/entidades/UsuarioService';
import { CriptografarSenha, GerarToken, DecodificarToken } from '../services/authService';
import appConfig from "../config/appConfig";
import { ParseErro, GerarErro } from "../services/erroService";

const controller = new EntidadeBaseController(UsuarioService);

controller.Post = async (req, res) => {
    try {
        var entidade = req.body;
        if(entidade.senha) {
            entidade.senha = CriptografarSenha(entidade.senha);
        }
        var retorno = await UsuarioService.Post(entidade);
        res.status(201).json(retorno);
    } catch (error) {
        res.status(422).json(ParseErro(error));
    }
}
controller.Login = (req, res) => {
    try {
        var request = req.body;

        UsuarioService.Get({ email: request.login }, 'email senha')
            .then(retorno => {
                if(retorno.length == 0) return res.status(422).json(GerarErro("Usuário não encontrado"));

                let usuario = retorno[0];

                if(CriptografarSenha(request.senha) === usuario.senha){
                    var validadeToken = new Date().setHours(new Date().getHours() + appConfig.duracaoToken);
                    var tokenBody = {
                        login: request.login,
                        validade: new Date(validadeToken).toISOString(),
                    }
                    var token = GerarToken(tokenBody);

                    res.status(200).json({ login: request.login, token })
                } else {
                    res.status(422).json(GerarErro("Acesso inválido"))
                }
            });
    } catch (error) {
        res.status(422).json(ParseErro(error));
    }
}

controller.Valida = (req, res) => {
    try {
        let token = req.headers["token"];
        if(!token) return res.status(401).json(GerarErro("Não autorizado!"));

        DecodificarToken(token, (err, succ) => {
            if(err) return res.status(401).json(GerarErro("Token inválido ou não informado."));

            res.status(200).json(succ);
        })
    } catch (error) {
        res.status(422).json(ParseErro(error));
    }
}

export default controller;