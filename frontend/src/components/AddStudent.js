import React, { useState } from "react";
import api from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faPlus } from "@fortawesome/free-solid-svg-icons";

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
    <div className="card-student">

      {/* Title */}
      <div className="sub-title">
        <FontAwesomeIcon
          icon={faUserPlus}
          style={{ fontSize: "1.6rem", color: "#2563eb" }}
        />
        <h2>Add Student</h2>
      </div>

      <form onSubmit={addStudent}>

        <div className="input">

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

        </div>

        {/* Button */}
        <div className="button-container">
          <button type="submit" className="btn-primary">
            <FontAwesomeIcon icon={faPlus} />
            Add Student
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddStudent;