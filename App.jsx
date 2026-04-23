import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

import EmployeeContext from "./EmployeeContext.jsx";
import Dashboard from "./Dashboard.jsx";
 
function App() {
  const [employee, setEmployee] = useState({
    name: "Krishna",
    role: "Developer",
    leaveBalance: 10,
  });

  const applyLeave = (leaveTaken) => {
    if (leaveTaken > 0 && leaveTaken <= employee.leaveBalance) {
      setEmployee({
        ...employee,
        leaveBalance: employee.leaveBalance - leaveTaken,
      });
    } else {
      alert("Invalid leave request");
    }
  };

  return (
    <EmployeeContext.Provider value={{ employee, applyLeave }}>
      <Dashboard />
    </EmployeeContext.Provider>
  );
}

export default App;