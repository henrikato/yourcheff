import ServicoConsulta from '../consultaService';
import Comanda from '../../models/Comanda';

const servico = new ServicoConsulta(Comanda);

servico.Get = async (query, fields) => await Comanda.find(query, fields).populate("estabelecimento").populate("usuario").populate("produtos");
servico.GetById = async (id) => Comanda.findById(id).populate("estabelecimento").populate("usuario").populate("produtos");

export default servico;