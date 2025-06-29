// file to display information about joining or creating a group/team
import React from "react";

const Grouper: React.FC = () => {
  return (
    <div>
      <h1>Join or Create a Group/Team</h1>
      <p>
        To access the main features of the application, you need to be a member
        of a group or team. You can either join an existing group or create a
        new one.
      </p>
      {/* Add buttons or links to join or create a group/team */}
      <button onClick={() => alert("Join Group/Team")}>Join Group/Team</button>
      <button onClick={() => alert("Create Group/Team")}>
        Create Group/Team
      </button>
    </div>
  );
};

export default Grouper;
