import React from "react";
import "./destination.css";
import destination from "../../../src/Destination";
import DriverSidebar from "../../component/Side/driveSidebar";
import { Link } from "react-router-dom";
import {BiMenu} from 'react-icons/bi';
import {FaWindowClose} from 'react-icons/fa';


console.log(destination);

const Destination = () => {
  return (
    <div className="container-destination" id="destination-fix-error">
      <div className="sidebar">
        <DriverSidebar/>
      </div>
      <div className="content">
        <div className="KicukiroNyabugogoos">
        <span className="nav-icon">
         {!close ? <BiMenu onClick={() => setclose(true)}/>:<FaWindowClose onClick={() => setclose(false)}/>}
          </span>

          <span className="driverLocation">Destination Status</span>
        </div>

        
        <div className="driverTable">
          <table>
            <thead className="table-header">
              <th className="header1">Origin</th>
              <th className="header1">Destination</th>
              <th className="header1">Status</th>
            </thead>
            <tbody className="table-body">
              {destination.map((item) => (
                <tr className="table-row">
                  <td className="item1">{item.Origin}</td>
                  <td className="item2">{item.Destination}</td>
                  <td className="item3"><span className="status"><Link to='/booking'   id="item-status">{item.Status} </Link> </span></td>
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
