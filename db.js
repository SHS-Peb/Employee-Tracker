const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'normal1',
  database: 'employee_tracker',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to fetch all departments
function getAllDepartments() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM department', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to fetch all roles
function getAllRoles() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM role', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to fetch all employees
function getAllEmployees() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM employee', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to add a new department
function addDepartment(departmentName) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO department (name) VALUES (?)', [departmentName], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

// Function to add a new role
function addRole(title, salary, departmentId) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

// Function to add a new employee
function addEmployee(firstName, lastName, roleId, managerId) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
}

// Function to update an employee's role
function updateEmployeeRole(employeeId, roleId) {
  return new Promise((resolve, reject) => {
    pool.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows);
      }
    });
  });
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
