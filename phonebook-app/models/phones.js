const pgp = require('pg-promise')();
const dbConfig = require ('../config/dbConfig');
const db = pgp(dbConfig)

const Phone ={};

Phone.findAll = () => {
  return db.query('SELECT * FROM phones');
}
Phone.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM phones
    WHERE id = $1
  `, [id]);
}

Phone.create = (phones) => {
  return db.one(`
    INSERT INTO phones
    (name,contact,location)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [phones.name, phones.contact, phones.location]);
}

Phone.update = (phones, id) => {
  return db.one(`
    UPDATE phones SET
    name = $1,
    contact = $2,
    location = $3
    WHERE id = $4
    RETURNING *
  `, [phones.name, phones.contact, phones.location, id]);
}

Phone.destroy = (id) => {
  return db.none(`
    DELETE FROM phones
    WHERE id = $1
  `, [id]);
}

module.exports = Phone;

