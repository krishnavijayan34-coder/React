import { useRef } from "react";

function LeaveApply() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.disabled = true;
  };

  return (
    <div>
      <h2>Leave System</h2>

      <button ref={buttonRef} onClick={handleClick}>
        Apply Leave
      </button>
    </div>
  );
}

export default LeaveApply;