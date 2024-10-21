const express = require('express');
const bodyParser = require('body-parser') 
const app = express();

//parse applicatioX-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))
// parse application/json
app.use(bodyParser.json())


require('dotenv').config();

const port = process.env.PORT || 3000;

require('dotenv').config();

//Coneccion a base de datos
const mongoose = require ('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.6gzio.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri,
  //{ useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e))



//Motor de plantillas
app.set('view engine', 'ejs');// con esto le decimos aa express que vamos a usar un motor de plantillas ejs
app.set('views', __dirname + '/views');//aca le decimos donde van a estar esas plantillas

//middeleware
app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "Error 404",
    descripcion: "nombre de mipagina"
  }) 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})