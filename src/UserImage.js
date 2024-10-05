import React from "react";

const UserImage = () => {
  return (
    <div>
      <h2>User Image</h2>
      <img
        src="image" 
        alt="User"
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
    </div>
  );
};

export default UserImage;
