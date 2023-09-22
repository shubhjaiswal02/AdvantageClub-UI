import React from 'react';
import UserCard from './UserCard';
import './App.css';

const userList = [
  { img_url: "https://cdn1.workadvantage.in/images/img/image/856254/ccef4b0dfc.jpeg", name: "Gabe Lewis", department: "Frontend", dob: "25/04/1998", }, 
  { img_url: "https://cdn1.workadvantage.in/images/img/image/856254/ccef4b0dfc.jpeg", name: "Cathy Simms", department: "DevOps", dob: "28/02/1993", },
   { img_url: "https://cdn1.workadvantage.in/images/img/image/2642440/304e6a2a3d.jpeg", name: "Jake Palmer", department: "Backend", dob: "03/06/1996", }, 
  { img_url: "https://cdn3.workadvantage.in/images/img/image/2642443/0b4a3386d6.jpeg", name: "Charles Minor", department: "Business Development", birth_date: "03/07/1994", },
];

function App() {
  return (
    <div className="app-container"> {/* Added container */}
      <div className="app">
        {userList.map((user, index) => (
          <UserCard
            key={index}
            img_url={user.img_url}
            name={user.name}
            department={user.department}
            dob={user.dob}
          />
        ))}
      </div>
    </div>
  );
}

export default App;