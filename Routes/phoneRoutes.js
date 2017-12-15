const express = require ('express');
const phonesRoutes = express.Router();
const phonesController = require('../controllers/phonesController');
phonesRoutes.get('/', phonesController.index);
phonesRoutes.post('/', phonesController.create);
phonesRoutes.get('/add',(req, res) => {
    res.render('phonebook/phonebook-add');
 });
phonesRoutes.get('/edit/:id', phonesController.edit);
phonesRoutes.get('/:id', phonesController.show);
phonesRoutes.put('/:id', phonesController.update);
phonesRoutes.delete('/:id', phonesController.delete);

module.exports = phonesRoutes;
