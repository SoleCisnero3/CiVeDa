const express = require('express');
const router = express.Router();


const Mascota = require('../models/mascota')

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
    
  }


    
})


  module.exports = router;