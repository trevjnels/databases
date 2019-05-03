CREATE DATABASE chat;

USE chat;

  -- username: 'Valjean',
  --         message: 'In mercy\'s name, three days is all I need.',
  --         roomname: 'Hello'

CREATE TABLE messages ( id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, content TEXT, username TEXT, roomname TEXT);
  /* Describe your table here.*
  autoincrement

-- createdAt: "2019-05-02T21:08:12.808Z"
-- objectId: "VPP7mE8qDd"
-- roomname: null
-- text: "howdy"
-- updatedAt: "2019-05-02T21:08:12.808Z"
-- username: "trevor"


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

CREATE TABLE  users (id INT PRIMARY KEY, username TEXT, roomname TEXT);
-- CREATE TABLE  users (id INT PRIMARY KEY, username TEXT CHARACTER SET utf8, roomname TEXT CHARACTER SET  utf8);

