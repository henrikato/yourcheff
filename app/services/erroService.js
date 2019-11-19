export const GerarErro = (mensagem, detalhes, traceback) => ({ mensagem, detalhes, traceback });
export const ParseErro = error => ({ mensagem: error.message, detalhes: error.stack });