const express = require('express');
const router = express.Router();
const { all, findById, save, remove } = require('./controller');

router.get('/lista', all)

router.get('/Cliente/:id', findById)

router.put('/atualiza/:id', save)

router.delete('/apaga/:id', remove)

module.exports = router
