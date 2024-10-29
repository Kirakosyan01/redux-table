import React from "react";
import "./table.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import ActionButtons from "../ActionButtons/ActionButtons";

export default function Table() {
  const usersData = useSelector((state) => state.usersData);

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
          {usersData.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{idx}</td>
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
          })}
        </tbody>
      </table>
    </div>
  );
}
