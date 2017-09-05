const Phone = require('../models/phones');
const phonesController = {};
// phonesController.createForm = (req, res) => {
// res.render('creates')};

phonesController.index = (req,res) => {
  console.log('in index function controller');
  Phone.findAll()
  .then(phones=> {
    console.log("this is data from index", phones)
    res.render('phonebook/phonebook-index',{
      message: 'ok',
      data: phones,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};
phonesController.show = (req, res) => {
  Phone.findById(req.params.id)
    .then(phones => {
      res.render('phonebook/phonebook-single', {
         message: 'ok',
        data: phones,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

phonesController.create = (req, res) => {
  console.log(req)
  Phone.create({
    name:req.body.name,
    contact: req.body.contact,
    location: req.body.location,
  }).then(phones=> {
  //  console.log(phones, "phones");
    res.redirect('/phones');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
phonesController.edit = (req,res) => {
  Phone.findById(req.params.id)
  .then(phone=> {
    res.render('phonebook/phonebook-edit', {
      message: 'ok',
      data:phone,
    });
  }).catch(err => {
    res.status(500).json(err);
  })
};


phonesController.update = (req, res) => {
  Phone.update({
    name: req.body.name,
    contact: req.body.contact,
    location: req.body.location,
  }, req.params.id).then(phones => {
    res.redirect('/phones');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

phonesController.delete = (req, res) => {
  Phone.destroy(req.params.id)
    .then(() => {
      res.redirect('/phones');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}





module.exports = phonesController;

