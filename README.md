# Student Management System

## Overview

The Student Management System is a full-stack web application that allows users to manage student records. Users can add, view, update, and delete student information through an interactive user interface.

## Features

* Add new students
* View all student records
* Update student details
* Delete student records
* Store and retrieve data using MySQL
* Responsive user interface

## Tech Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript
* Axios

### Backend

* Node.js
* Express.js

### Database

* MySQL

## Project Structure

student-management-system/
├── frontend/
├── backend/
└── students_db.sql

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/shelke-suraj/student-management-system.git
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Configure MySQL

* Create a database in MySQL.
* Import the `students_db.sql` file.

### 5. Start the backend server

```bash
cd backend
npx nodemon server.js
```

### 6. Start the frontend application

```bash
cd frontend
npm start
```

## Future Improvements

* User authentication and authorization
* Search and filter students
* Pagination
* Improved UI/UX
* Form validation

## Author

Suraj Shelke
# student-management-system
