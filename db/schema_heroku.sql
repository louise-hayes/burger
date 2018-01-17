DROP DATABASE IF EXISTS lirh7255zzz1cjvu;
-- Creates the "burgers_db" database --
CREATE DATABASE lirh7255zzz1cjvu;

-- Makes it so all of the following code will affect burgers_db --
USE lirh7255zzz1cjvu;

CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "burger_name" which cannot contain null --
  burger_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "devoured" which cannot contain null --
  devoured BOOLEAN NOT NULL,
  -- Makes a date column called "date" --
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);