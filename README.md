# Employee Tracker (CMS)

## Description

This week’s project involved creating a **Command-Line Interface (CLI)** application that allows non-developers to easily interact with and manage a company's employee database. The goal was to build a simple **Content Management System (CMS)** to view and modify departments, roles, and employees.

The application was built from scratch using **Node.js**, **Inquirer**, and **MySQL**.

Because this is a backend CLI application, it cannot be deployed on a live server. Instead, a walkthrough video has been provided to demonstrate its full functionality and how all the acceptance criteria have been met.

---

## Technologies Used

- Node.js  
- Inquirer (v8.2.4)  
- MySQL  
- console.table (for easy data display)  
- MySQL2 npm package  

---

## Features

- View all employees, roles, and departments  
- Add a new employee, role, or department  
- Update an employee’s role  
- View employees by manager or department  
- Delete employees, roles, or departments  
- Calculate total utilized budget of a department  

---

## Getting Started

1. Clone this repository  
2. Run `npm install` to install dependencies  
3. Create a `.env` file and provide your MySQL credentials  
4. Use the `schema.sql` and `seeds.sql` to set up your database  
5. Run the application using:  
