import React ,{useEffect,useState}from "react";
import "./booking.css";
import drivers from "../../../src/Driver";
import DriverSidebar from "../../component/Side/driveSidebar";
import {BiMenu} from 'react-icons/bi';
import {FaWindowClose} from 'react-icons/fa';
import { useState } from "react";
const Booking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    getDataToBackendDriver();
  }, []);

  const  getDataToBackendDriver = async () => {
    const YOUR_TOKEN = localStorage.getItem('token');
    const response = await fetch('https://precious-tan-slug.cyclic.app/api/v2/booking/readAll', {
      method: 'GET',
      headers: {
        Authorization: `bearer ${YOUR_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    let actualData = await response.json();
    console.log(YOUR_TOKEN);
 

    setData(actualData.data);
    
    console.log("your data",actualData.data);

  };

  const [close,setclose] = useState(false);
  return (
    <div className="driverbooking-Container" id="booking-fix-error">
      <div className="sidebar">
        <DriverSidebar />
      </div>
      <div className="driverbooking-Content">

        <div className="KicukiroNyabugogoos-booking">
        <span className="nav-icon">
         {!close ? <BiMenu onClick={() => setclose(true)}/>:<FaWindowClose onClick={() => setclose(false)}/>}
          </span>

          <span className="driverbooking-Location">Kicukiro - Nyabugogo</span>
        </div>
        {close && <div className="booking-popup">
          <ul>
            <li>dashboard</li>
            <li>dashboard</li>
            <li>dashboard</li>
          </ul>
        </div>}
        <div className="driverbooking-Table">
          <table>
            <thead className="table-header-booking">
              <th className="header">No</th>
              <th className="header">Passengers</th>
              <th className="header">Seats Booked</th>
              <th className="header"> Booking Status</th>
            </thead>
            <tbody className="table-body-booking">
              {drivers ? drivers.map((item) => (
                <tr className="table-row-booking">
                  <td className="item0">{item.no}</td>
                  <td className="item1">{item.name}</td>
                  <td className="item2">{item.seat}</td>
                  <td className="item3">
                    <div className="driverbooking-Holder">
                      <div className={item.accepted === false ? "box1" : ""}>
                        <span className="deny">Deny</span>
                      </div>
                      <div className={item.accepted === true ? "box2" : ""}>
                        <span className="accept">Accept</span>
                      </div>
                    </div>
                  </td>
                </tr>
              )):""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Booking;
