const inquirer = require('inquirer');
const db = require('./db');

function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ])
    .then(answer => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit();
      }
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

function viewAllDepartments() {
  db.getAllDepartments()
    .then(departments => {
      console.table(departments);
      mainMenu();
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

function viewAllRoles() {
  db.getAllRoles()
    .then(roles => {
      console.table(roles);
      mainMenu();
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

function viewAllEmployees() {
  db.getAllEmployees()
    .then(employees => {
      console.table(employees);
      mainMenu();
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the department:'
      }
    ])
    .then(answer => {
      db.addDepartment(answer.departmentName)
        .then(() => {
          console.log('Department added successfully!');
          mainMenu();
        })
        .catch(error => {
          console.error('Error occurred:', error);
          mainMenu();
        });
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Enter the title of the role:'
      },
      {
        type: 'number',
        name: 'roleSalary',
        message: 'Enter the salary for this role:'
      },
      {
        type: 'number',
        name: 'departmentId',
        message: 'Enter the department ID for this role:'
      }
    ])
    .then(answer => {
      db.addRole(answer.roleTitle, answer.roleSalary, answer.departmentId)
        .then(() => {
          console.log('Role added successfully!');
          mainMenu();
        })
        .catch(error => {
          console.error('Error occurred:', error);
          mainMenu();
        });
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the employee:'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the employee:'
      },
      {
        type: 'number',
        name: 'roleId',
        message: 'Enter the role ID for this employee:'
      },
      {
        type: 'number',
        name: 'managerId',
        message: "Enter the manager's ID for this employee (leave blank if the employee has no manager):"
      }
    ])
    .then(answer => {
      db.addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId || null)
        .then(() => {
          console.log('Employee added successfully!');
          mainMenu();
        })
        .catch(error => {
          console.error('Error occurred:', error);
          mainMenu();
        });
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'employeeId',
        message: 'Enter the ID of the employee you want to update:'
      },
      {
        type: 'number',
        name: 'roleId',
        message: 'Enter the new role ID for the employee:'
      }
    ])
    .then(answer => {
      db.updateEmployeeRole(answer.employeeId, answer.roleId)
        .then(() => {
          console.log('Employee role updated successfully!');
          mainMenu();
        })
        .catch(error => {
          console.error('Error occurred:', error);
          mainMenu();
        });
    })
    .catch(error => {
      console.error('Error occurred:', error);
      mainMenu();
    });
}

mainMenu();
