const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controllers/product')

// On appel notre logique avec l'utilisatrion des route
router.post('/', ProdCtrl.createProduct);
router.get('/:_id', ProdCtrl.getOneProduct);
router.get('/', ProdCtrl.getAllProduct);


module.exports = router;