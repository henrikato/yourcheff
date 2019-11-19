import { sign, verify } from "jsonwebtoken";
import appConfig from "../config/appConfig";
import { GerarErro } from './erroService';

export const GerarToken = (data) => sign(data, appConfig.saltKey, { expiresIn: `${appConfig.duracaoToken}h` });

export const CriptografarSenha = (senha) => sign(senha, appConfig.saltKey);

export const DecodificarToken = (token, cb) => verify(token, appConfig.saltKey, cb);

export const Autorizacao = (req, res, next) => {
    var token = req.headers["token"];

    if(!token) return res.status(401).json(GerarErro("Acesso não autorizado", "Header de autenticação (Token) não foi informado"));

    DecodificarToken(token, (err, succ) => {
        if(err) return res.status(422).json(GerarErro("Acesso não autorizado", "Token expirado"))

        next()
    })
}