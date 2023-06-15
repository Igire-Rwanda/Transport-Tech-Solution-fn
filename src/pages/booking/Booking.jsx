import React from "react";
<<<<<<< HEAD
import './booking.css';
import Image from '../image/ElecMobility.jpg'

const Booking =()=>{
    return(
        <div className="container-booking" id="booking-fix-error">
        <div className="title">
      Booking
        </div>
        <div className="table">
        <div className="table-tile">
           
        <div className="origin">
        Origin
     <ul>
<li>kicukiro nyanza</li>
<li>kicukiro nyanza</li>
<li>kicukiro nyanza</li>
<li>kicukiro nyanza</li>
<li>Gatenga</li>
<li>Gatenga</li>
<li>Rwandex</li>
<li>Rwandex</li>
<li>kicukiro nyanza</li>




     </ul>
        </div>
        </div>





        <div className="table-tile">
           
           <div className="destination">
          Destination
        <ul>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   <li>Rwandex</li>
   <li>Sonatube</li>
   <li>Rwandex</li>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   <li>Nyabugogo</li>
   
   
   
   
        </ul>
           </div>
           </div>





           <div className="table-tile">
           
           <div className="destination">
           Status
    <div className="holder">
    <div className="box1">
        Deny
        </div>
        <div className="box2">
        Accept
    </div>
    </div>
           </div>
           </div>
        </div>

        </div>
    )
}
export default Booking;
=======
import "./booking.css";
import drivers from '../../../src/Driver'
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
            <tbooking-fix-error className="table-booking-fix-error">
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
            </tbooking-fix-error>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Booking;
>>>>>>> 2998d37ddbb52a5812ec0a9c2a09b2c0de005ee8
