const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas:[
            { id:'123456',
              nombre: 'rex',
              descripcion: 'diagnostico de rex'
            },
            { id:'123457',
                nombre: 'Milo',
                descripcion: 'diagnostico de Milo'
              }
        ]
    })
})


  module.exports = router;