

DROP TABLE IF EXISTS phones;


CREATE TABLE phones(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  contact BIGINT,
  location VARCHAR(255)
);


