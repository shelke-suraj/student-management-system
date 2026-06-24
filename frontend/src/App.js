import React from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;