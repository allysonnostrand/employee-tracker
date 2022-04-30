DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
   id INT NOT NULL, 
   department_name VARCHAR(30),
   PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    FOREIGN KEY (department_id),
    REFERENCES department(id)
);