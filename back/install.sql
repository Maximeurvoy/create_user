USE accountlivecoding;

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  fisrtname VARCHAR(100),
  lastname VARCHAR(100),
  email VARCHAR(255),
  password TEXT,
  date DATETIME
);