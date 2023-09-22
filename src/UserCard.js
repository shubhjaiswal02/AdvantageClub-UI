import React from 'react';

const UserCard = ({ img_url, name, department, dob }) => {
  return (
    <div className="user-card">
      <img src={img_url} alt={name} />
      <h3>{name}</h3>
      <p>{department}</p>
      <p>DOB: {dob}</p>
      <button>Wish</button>
    </div>
  );
};

export default UserCard;
