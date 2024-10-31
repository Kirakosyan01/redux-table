import React, { useEffect, useState } from "react";
import "./table.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import ActionButtons from "../ActionButtons/ActionButtons";
import AnimationData from "../../assets/Animation - 1728464284574.json";
import Lottie from "lottie-react";

export default function Table() {
  const usersData = useSelector((state) => state.usersData);
  const searchTerm = useSelector((state) => state.searchTerm);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filteredUsers = usersData.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(usersData);
    }
  }, [searchTerm, usersData]);


  return (
    <div>
      <Navbar />
      <table className="Table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th className="ActionMore">More</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, idx) => {
              return (
                <tr key={user.id}>
                  <td>{idx + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.company}</td>
                  <td>{user.status}</td>
                  <td className="ActionMore">
                    {<ActionButtons user={user} />}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8}>
                <div className="AnimationParentDiv">
                  <Lottie
                    animationData={AnimationData}
                    className="animationDiv"
                  />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
