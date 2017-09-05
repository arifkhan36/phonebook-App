module.exports = process.env.DATABASE_URL || {
  host:     process.env.DB_HOST || 'localhost',
  port:     process.env.DB_PORT || 5432,
  database: process.env.DATABASE_URL || 'phones_db_dev',
  /* user:     process.env.DB_USER, */
};

