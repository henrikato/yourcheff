import EntidadeBaseController from "./entidadeBaseController";
import Estabelecimento from '../models/Estabelecimento';
import ServicoConsulta from "../services/consultaService";

var servico = new ServicoConsulta(Estabelecimento);
const controller = new EntidadeBaseController(servico);

export default controller;
