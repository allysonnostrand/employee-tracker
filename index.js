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
                    db.query('SELECT * FROM employee', (err,res) => {
                        console.table(res);
                    })
                break;
            }
        })
    }

  menu();