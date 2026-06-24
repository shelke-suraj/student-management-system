import React, { useEffect, useState } from "react";
import api from "../api";

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const res = await api.get("/students");
        setStudents(res.data);
    };

    const deleteStudent = async (id) => {
        await api.delete(`/students/${id}`);
        fetchStudents();
    };

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(s => (
                    <li key={s.id}>
                        {s.name} - {s.course} - {s.marks}
                        <button onClick={() => deleteStudent(s.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;