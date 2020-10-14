var express = require('express');
var router = express.Router();
var tracksCtrl = require('../../controllers/api/tracks');


/* GET /api/tracks */
router.get('/', tracksCtrl.index);
router.get('/:id', tracksCtrl.show);
router.post('/', tracksCtrl.create);
router.delete('/:id', tracksCtrl.delete);
router.put('/:id', tracksCtrl.update);




module.exports = router;