import ServicoConsulta from '../consultaService';
import Cardapio from '../../models/Cardapio';

const servico = new ServicoConsulta(Cardapio);

servico.Get = async (query, fields) => await Cardapio.find(query, fields).populate("estabelecimento").populate("produtos");
servico.GetById = async (id) => model.findById(id, cb).populate("estabelecimento").populate("produtos");

export default servico;