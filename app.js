const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Motor de plantillas
app.set('view engine', 'ejs');// con esto le decimos aa express que vamos a usar un motor de plantillas ejs
app.set('views', __dirname + '/views');//aca le decimos donde van a estar esas plantillas

//middeleware
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render("index", {titulo: "Mi titulo dinamico"})
})

app.get('/servicios', (req, res) => {
  res.render("servicios", {tituloServicios: "Este es un mensaje dinamico desde servicios"})
})

app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "Error 404",
    descripcion: "nombre de mipagina"
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})