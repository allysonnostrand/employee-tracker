const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

  function menu() {
      inquirer.prompt(
          [
              {
                  type: 'list',
                  message: 'What would you like to do?',
                  choices: ['view all employees', 'add employee', 'update employee role', 'view all roles', 'add role', 'view all departments', 'add department'],
                  name: 'menuOpts'
              }
          ]).then(answers =>{
                switch (answers.menuOpts){
                    case 'view all employees':
                        db.query(`SELECT 
                            erd.id,
                            erd.first_name,
                            erd.last_name,
                            erd.role_id,
                            erd.title,
                            erd.salary,
                            erd.department_id,
                            erd.department_name,
                            m.first_name manager_first,
                            m.last_name manager_last
                            FROM (SELECT * FROM employee e LEFT JOIN 
                                (
                                    SELECT 
                                        r.id role_id,
                                        title,
                                        salary,
                                        department_id,
                                        department_name
                                    FROM roles r 
                                    LEFT JOIN department d
                                    ON r.department_id = d.id
                                ) rd
                            USING (role_id)) erd
                            LEFT JOIN employee m
                            ON erd.manager_id = m.id`, (err,res) => {
                            console.table(res);
                            menu();
                        })
                    break;
                }
                switch (answers.menuOpts){
                    case 'add employee':
                        return addEmployee();
                    break;
                }
                switch (answers.menuOpts){
                    case 'update employee role':
                            return updateRole()
                    break;
                }
                switch (answers.menuOpts){
                    case 'view all roles':
                        db.query('SELECT * FROM roles', (err,res) => {
                            console.table(res);
                            menu();
                        })
                    break;
                }
                switch (answers.menuOpts){
                    case 'add role':
                         return addRole();
                }
                switch (answers.menuOpts){
                    case 'view all departments':
                        db.query('SELECT * FROM department', (err,res) => {
                            console.table(res);
                            menu();
                        })
                    break;
                }
                switch (answers.menuOpts){
                    case 'add department':
                            return addDepartment();
                    break;
                }
            })
    }

function addEmployee() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the employees first name?',
                name: 'fName'
            },
            {
                type: 'input',
                message: 'What is the employees last name?',
                name: 'lName'
            },
            {
                type: 'input',
                message: 'What is the employees role id?',
                name: 'rId'
            },
            {
                type: 'input',
                message: 'What is the employees managers id?',
                name: 'mId'
            },
        ]).then (res =>{
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [res.fName, res.lName, res.rId, res.mId], (err, data) =>{
                console.log('employee added!');
                menu();
            }) 
        })
}

function updateRole(){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Please enter employee id to update their role.',
                name: 'empId'
            },
            {
                type: 'input',
                message: 'What is the employees new role id?',
                name: 'upRole'
            },
        ]).then (res =>{
            db.query('UPDATE employee SET role_id = ? WHERE id = ?', [res.upRole, res.empId], (err, data) =>{
                console.log('new role set!');
                menu();
            })
        })
}

function addRole(){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the name of the role?',
                name: 'rName'
            },
            {
                type: 'input',
                message: 'What is the salary?',
                name: 'rolsal'
            },
            {
                type: 'input',
                message: 'What is the department id?',
                name: 'roldep'
            }

        ]).then (res =>{
            db.query('INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)', [res.rName, res.rolsal, res.roldep], (err, data) =>{
                console.log('role added!');
                menu();
            }) 
        })
}

function addDepartment(){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the department name?',
                name: 'dName'
            }
        ]).then (res => {
            db.query('INSERT INTO department (department_name) VALUES (?)', [res.dName], (err, data) =>{
                console.log('department added!');
                menu();
            })
        })
}

menu();