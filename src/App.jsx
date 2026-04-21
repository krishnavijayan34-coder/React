import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//import LoginToggle from "./Login.jsx";
//import UserStatus from "./userstatus.jsx";
import AdminPanel from "./AdminPanel.jsx";
import StudentPanel from "./StudentPanel.jsx";
import TeacherPanel from "./TeacherPanel.jsx";


function App() {
  const [role, setRole] = useState("");
 return (
    <div>
      {/* <LoginToggle /> */}
      {/* <UserStatus status="active" /> */}
      {/* <UserStatus status="inactive" /> */}
      {/* <UserStatus status="xyz" /> */}

      <button onClick={() => setRole("admin")}>Admin</button>
      <button onClick={() => setRole("student")}>Student</button>
      <button onClick={() => setRole("teacher")}>Teacher</button>
      {role === "admin" && <AdminPanel />}
      {role === "student" && <StudentPanel />}
      {role === "teacher" && <TeacherPanel />}

    </div>
  );
}

export default App;
