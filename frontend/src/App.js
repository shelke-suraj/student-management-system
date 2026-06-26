import React from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faHouse, faGraduationCap } from "@fortawesome/free-solid-svg-icons";



function App() {
  return (
    <>
    <div className="subtitlebar">
     <FontAwesomeIcon
  icon={faGraduationCap}
  style={{ color: "rgb(255, 255, 255)", fontSize: "2rem" }}
/>
    <h1 className="title">Student Management System</h1>
    </div>

    <div className="container">
    <div className="card">
      <AddStudent />
      </div>

      <div className="card">
      <StudentList />
    </div>
    </div>
    </>
  );
}

export default App;