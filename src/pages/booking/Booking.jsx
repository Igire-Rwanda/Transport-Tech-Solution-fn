import React from "react";
import "./booking.css";
import drivers from "../../../Driver";
import DriveSidebar from "../../component/Side/driveSidebar";
// const driver = drivers();
console.log(drivers);
// { Students.map((item) => (
//     <div className="mappu">
//         <div className="name"><span > name: {item.name}</span></div>
//         <div className="age"><span > age: {item.age}</span></div>
//        </div>
// ) )}
const Booking = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <DriveSidebar/>
      </div>
      <div className="content">
        <div className="KicukiroNyabugogo">
          <span className="loc">Kicukiro - Nyabugogo</span>
        </div>
        <div className="table">
          <table>
            <thead className="table-header">
              <th className="header">No</th>
              <th className="header">Passengers</th>
              <th className="header">Seats Booked</th>
              <th className="header"> Booking Status</th>
            </thead>
            <tbody className="table-body">
              {drivers.map((item) => (
                <tr className="table-row">
                  <td className="item0">{item.no}</td>
                  <td className="item1">{item.name}</td>
                  <td className="item2">{item.seat}</td>
                  <td className="item3">
                    <div className="holder ">
                      <div className={item.accepted === false ? "box1" : ""}>
                        <span className="deny">Deny</span>
                      </div>
                      <div className={item.accepted === true ? "box2" : ""}>
                      <span className="accept">Accept</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Booking;
