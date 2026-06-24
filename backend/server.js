const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Get all students
app.get('/students', (req, res) =>{
    db.query("Select * From students", (err, result) =>{
        if (err) return res.json(err);
        res.json(result);
    });
});

//Add students

app.post('/students', (req, res) =>{
    const {name, email, course, marks} = req.body;

    db.query(
        "INSERT INTO students (name, email, course, marks) VALUES (?,?,?,?)",
        [name, email, course, marks],
        (err) =>{
            if (err) return res.json(err);
            res.json({ message: "Students added"});
        }
    );
});

//Delete student
app.delete('/students/:id', (req, res) =>{
    db.query(
        "DELETE FROM students WHERE id=?",
        [req.params.id],
        (err) => {
            if (err) return res.json(err);
            res.json({message: "Student deleted"});
        }
    );
});

app.listen(5000, () => {
    console.log("Server running on port 5000")
});