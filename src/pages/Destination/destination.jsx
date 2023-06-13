import React from "react";
import "./Destination.css";
import destination from "../../../Destination";
import DriveSidebar from "../../component/Side/driveSidebar";
// const driver = drivers();
console.log(destination);
// { Students.map((item) => (
//     <div className="mappu">
//         <div className="name"><span > name: {item.name}</span></div>
//         <div className="age"><span > age: {item.age}</span></div>
//        </div>
// ) )}
const Destination = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <DriveSidebar/>
      </div>
      <div className="content">
        <div className="KicukiroNyabugogo">
          <span className="loc">Destination Status</span>
        </div>
        <div className="table">
          <table>
            <thead className="table-header">
              <th className="header">Origin</th>
              <th className="header">Destination</th>
              <th className="header">Status</th>
            </thead>
            <tbody className="table-body">
              {destination.map((item) => (
                <tr className="table-row">
                  <td className="item1">{item.Origin}</td>
                  <td className="item2">{item.Destination}</td>
                  <td className="item3"><span className="status">{item.Status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Destination;
