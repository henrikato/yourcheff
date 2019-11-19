import EntidadeBaseController from "./entidadeBaseController";
import Produto from '../models/Produto';
import ServicoConsulta from "../services/consultaService";

var servico = new ServicoConsulta(Produto);
const controller = new EntidadeBaseController(servico);

export default controller;
