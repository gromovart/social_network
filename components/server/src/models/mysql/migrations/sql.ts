export const createTableUsers = `CREATE TABLE IF NOT EXISTS users\
  (
    id INT AUTO_INCREMENT,\
    firstName VARCHAR(255) NOT NULL,\
    lastName VARCHAR(255) NOT NULL,\
    login VARCHAR(255) NOT NULL,\
    password VARCHAR(255) NOT NULL,\
    dateBirthday VARCHAR(255) NOT NULL,\
    avatar VARCHAR(255) DEFAULT NULL,\
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
    CONSTRAINT users_pk PRIMARY KEY(id),\
    CONSTRAINT users_login_uq UNIQUE(login)
  )`;
// CONSTRAINT users_age_chk CHECK(age>0 AND age<100)
