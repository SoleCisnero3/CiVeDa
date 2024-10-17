const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const RutasWeb = require('./router/RutasWeb')

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