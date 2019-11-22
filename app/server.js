import express from 'express';
import path from 'path';
import { urlencoded, json } from 'body-parser';
import { connect } from 'mongoose';
import appConfig from './config/appConfig';

import Usuario from './routes/usuarioRoute';
import Estabelecimento from './routes/estabelecimentoRoute';
import Produto from './routes/produtoRoute';
import Comanda from './routes/comandaRoute';
import Cardapio from './routes/cardapioRoute';
import { Autorizacao } from './services/authService';

const app = express();

// connect("mongodb://localhost:32769/yourcheff", { useNewUrlParser: true });
connect("mongodb+srv://henrikato:Mongo2019@cluster0-3pncu.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

app.use(urlencoded({ extended: true })).use(json());
app.use('/assets', express.static(path.join(__dirname, "/assets")));
app.use(express.static(path.join(__dirname, "/public")));


app.use('/api', Usuario);
app.use('/api', Autorizacao, [ Estabelecimento, Produto, Comanda, Cardapio ])

const port = process.env.PORT || appConfig.portaApi;
app.listen(port, () => {
    console.clear();
    console.log(`Aplicação online na porta ${port}`);
})