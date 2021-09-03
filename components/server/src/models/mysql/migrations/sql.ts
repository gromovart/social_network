export const createTableUsers = `CREATE TABLE IF NOT EXISTS users\
  (
    id INT AUTO_INCREMENT,\
    firstName VARCHAR(255) NOT NULL,\
    lastName VARCHAR(255) NOT NULL,\
    login VARCHAR(255) NOT NULL,\
    password VARCHAR(255) NOT NULL,\
    dateBirthday VARCHAR(255) NOT NULL,\
    avatar VARCHAR(255) DEFAULT NULL,\
    salt VARCHAR(255) DEFAULT NULL,\
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
    CONSTRAINT users_pk PRIMARY KEY(id),\
    CONSTRAINT users_login_uq UNIQUE(login)
  )`;
// CONSTRAINT users_age_chk CHECK(age>0 AND age<100)

export const createTableSessions = `CREATE TABLE IF NOT EXISTS sessions\
  (
    id INT AUTO_INCREMENT,\
    token VARCHAR(255) NOT NULL,\
    userId INT NOT NULL,\
    blocked BOOL NOT NULL DEFAULT FALSE,\
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
    CONSTRAINT sessions_pk PRIMARY KEY(id),\
    CONSTRAINT sessions_token_uq UNIQUE(token),\
    CONSTRAINT sessions_users_fk
    FOREIGN KEY (userId) REFERENCES users(id)
  )`;
