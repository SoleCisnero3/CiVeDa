const express = require('express');
const router = express.Router();


const Mascota = require('../models/mascota');
const e = require('express');

router.get('/', async(req, res) => {

  try {
      const arrayMascotasDB  = await Mascota.find()
      console.log(arrayMascotasDB)

      res.render("mascotas", {
        arrayMascotas: arrayMascotasDB
        /*arrayMascotas:[
            { id:'123456',
              nombre: 'rex',
              descripcion: 'diagnostico de rex'
            },
            { id:'123457',
                nombre: 'Milo',
                descripcion: 'diagnostico de Milo'
              }
        ]*/
        
    })
  } catch (error) {
    console.log(error)
    
  }
    
})
// creamos mascotas 
router.get('/crear', (req, res) =>{
  res.render('crear')
})


router.post('/', async(req, res) => {
  const body = req.body
  try {
    //const mascotaDB = new Mascota(body)
    //await mascotaDB.save()
    await Mascota.create(body)
    res.redirect('/mascotas')

  } catch (error) {
    console.log(error)
  }
})

//modificamos mascotas
router.get('/:id', async(req, res) => {
  const _id = req.params.id

  try {
    const mascotaDB = await Mascota.findOne()
    console.log(mascotaDB)

    res.render('detalle', {
      mascota: mascotaDB,
      error: false
    })

  } catch (error) {
    console.log(error)
    res.render('detalle', {
      error: true,
      meensaje: 'No se encuentra el id seleccionado'
    })
  }
})


  module.exports = router;