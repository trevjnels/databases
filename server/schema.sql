CREATE DATABASE chat;

USE chat;

  -- username: 'Valjean',
  --         message: 'In mercy\'s name, three days is all I need.',
  --         roomname: 'Hello'

CREATE TABLE messages ( id INT PRIMARY KEY, username TEXT CHARACTER SET  utf8, message TEXT CHARACTER SET  utf8, roomname TEXT CHARACTER SET  utf8
  /* Describe your table here.*/
  
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
