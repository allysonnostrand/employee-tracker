DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
   id INT NOT NULL, 
   department_name VARCHAR(30) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL, FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT, FOREIGN KEY (manager_id) REFERENCES roles(id)
);

DESCRIBE department;

DESCRIBE roles;

DESCRIBE employee;