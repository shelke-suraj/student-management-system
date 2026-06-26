import React, { useState } from "react";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    marks: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const addStudent = async (e) => {
    e.preventDefault();

    try {
      await api.post("/students", student);

      alert("Student Added Successfully");

      // reset form instead of reload (React way)
      setStudent({
        name: "",
        email: "",
        course: "",
        marks: ""
      });

    } catch (error) {
      console.log(error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="card">

      {/* Title */}
      <div className="sub-title">
        <FontAwesomeIcon
          icon={faUser}
          className="icon"
          style={{ fontSize: "1.5rem", color: "blue" }}
        />
        <h2>Add Student</h2>
      </div>

      {/* FORM */}
      <form className="input" onSubmit={addStudent}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={student.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Marks</label>
          <input
            type="number"
            name="marks"
            placeholder="Enter Marks"
            value={student.marks}
            onChange={handleChange}
            required
          />
        </div>

        {/* BUTTON */}
       
        <button type="submit" className="btn-primary">
          Add Student
        </button>

      </form>
    </div>
  );
}

export default AddStudent;