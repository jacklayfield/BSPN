import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn  center modal-button"
      style={{
        backgroundColor: "#daa520",
        borderColor: "#daa520",
        color: "black",
        fontWeight: 600,
        fontSize: "1.5rem",
      }}
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;