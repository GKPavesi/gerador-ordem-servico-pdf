const path = require('path')  // tem que requirir pra rodar o ejs e os view model tambem
const express = require("express");
const app = express();
const bp = require('body-parser') //chamando o body parser
//instalação e configuração do body parser (pra formar json dos requerimentos)
app.use(bp.json());
app.use(bp.urlencoded());


//instalação e configuração do ejs
app.use(express.static(path.join(__dirname, "public"))); // apontar pasta publica para rodar os assets ("estoque")
app.set('views', path.join(__dirname, "/views")) // informar o express onde está a pasta view
app.set("view engine", "ejs"); // escolher o template enginner para rodar o "html" do projeto
//final da instalão e configuração do ejs

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})

const rotas = require('./routes/rotas') // chamando as rotas

rotas(app) // falando para usar as rotas e passando os servidor como variavel de entrada

/* app.get('/', HomeController.getHome);
app.get('/sobre', SobreController.getSobre);
app.get('/gerador', GeradorController.getGerador);
app.post('/gerador', GeradorController.postGerador);

 */
//importar controllers
/* const HomeController = require('./controllers/home-controller')
const SobreController = require('./controllers/sobre-controller')
const GeradorController = require('./controllers/gerador-controller') */

//não precisa mais dessas rotas e desses controles aqui porque dividi as rotas!!
