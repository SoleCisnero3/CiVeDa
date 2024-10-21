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
  const id = req.params.id

  try {
    const mascotaDB = await Mascota.findOne({_id:id})
    console.log(mascotaDB)

    res.render('detalle', {
      mascota: mascotaDB,
      error: false
    })

  } catch (error) {
    console.log(error)
    res.render('detalle', {
      error: true,
      mensaje: 'No se encuentra el id seleccionado'
    })
  }
})

//eliminar mascota
router.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
      const mascotaDB = await Mascota.findByIdAndDelete({_id: id})

      if (mascotaDB) {
        res.json({
          estado: true,
          mensaje: 'Eliminado!'
        })

        
      } else {
        res.json({
          estado: false,
          mensaje: 'Fallo eliminar!'
        })
      }
      
    } catch (error) {
      
    }


})
  module.exports = router;


  router.put('/:id', async(req, res) => {
    const id = req.params.id
    const body = req.body

    try {
      
      const mascotaDB = await Mascota.findOneAndUpdate(id, body, {useFindAndModify: false})
      console.log(mascotaDB)

      res.json({
        estado: false,
        mensaje: 'Editado'
      })

    } catch (error) {
       console.log(error)

       res.json({
        estado: false,
        mensaje: 'Fallo editar!'
      })
      
    }
  })