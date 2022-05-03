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
                            menu();
                        })
                    break;
                }
                // switch (answers.menuOpts){
                //     case 'add employee':
                //         return addEmployee();
                //         })
                //     break;
                // }
                // switch (answers.menuOpts){
                //     case 'update employee role':
                            // return updateRole()
                //         })
                //     break;
                // }
                switch (answers.menuOpts){
                    case 'view all roles':
                        db.query('SELECT * FROM roles', (err,res) => {
                            console.table(res);
                            menu();
                        })
                    break;
                }
                // switch (answers.menuOpts){
                //     case 'add role':
                //          return addRole(); 
                //         })
                //     break;
                // }
                switch (answers.menuOpts){
                    case 'view all departments':
                        db.query('SELECT * FROM department', (err,res) => {
                            console.table(res);
                            menu();
                        })
                    break;
                }
                // switch (answers.menuOpts){
                //     case 'add department':
                            // return addDepartment();
                //     break;
                // }
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
                message: 'What is the employees role?',
                name: 'fName'
            },
            {
                type: 'list',
                message: 'Who is the employees manager?',
                choices: 
                name: 'mName'
            },
        ]
    )
}

function updateRole(){

}

function addRole(){

}

function addDepartment(){

}


  menu();