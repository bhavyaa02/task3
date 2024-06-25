import React from "react";

const UpdatesList = ({ updates, onClickUpdate }) => {
  return (
    <div className="component-container">
      <h2>Updates and Announcements</h2>
      <ul className="list-group">
        {updates.map((update, index) => (
          <li key={index} className="list-group-item">
            <button className="notification-button" onClick={() => onClickUpdate(update.id)}>
              {update.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdatesList;
