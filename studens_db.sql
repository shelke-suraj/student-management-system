CREATE DATABASE student_db;
USE student_db;
CREATE TABLE students(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    course VARCHAR(100),
    marks INT
    );
    
    INSERT INTO students (name, email, course, marks)
    VALUES
    ('Ram', 'ram@gmail.com', 'BE', '91'),
    ('Mohan', 'mohan@gmail.com', 'BCA', '90');
    
    SELECT *FROM students;
    

    
    