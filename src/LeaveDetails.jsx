import { useState, useContext } from "react";
import EmployeeContext from "./EmployeeContext";

function LeaveDetails() {
  const { employee, applyLeave } = useContext(EmployeeContext);

  const [leaveDays, setLeaveDays] = useState("");

  const handleApply = () => {
    applyLeave(Number(leaveDays));
    setLeaveDays("");
  };

  return (
    <div>
      <h2>Employee Leave System</h2>

      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Available Leave: {employee.leaveBalance}</p>

      <input
        type="number"
        value={leaveDays}
        placeholder="Enter leave days"
        onChange={(e) => setLeaveDays(e.target.value)}
      />

      <button onClick={handleApply}>
        Apply Leave
      </button>
    </div>
  );
}

export default LeaveDetails;