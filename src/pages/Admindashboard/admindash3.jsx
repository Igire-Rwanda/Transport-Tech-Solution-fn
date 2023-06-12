import React from "react";
import { useState } from "react";
import busmanage from "../../constants/busmanage";
import './admin.css'
import Sidebar from '../../component/sidebar'
const Admin2 =()=>{
    return(
        <>
        <div className="admin-container">
        <Sidebar/>
        <div className="admin-content">
        <div className="upper-part">
            <div className="part-one">
          <h4>WELCOME <span style={{color:"#009AC7"}}>
            Admin.</span></h4>
            </div>
            <div className="upbar">
              <div className="upicons"> 
            <i class='bx bx-search'></i>
            <i class='bx bx-bell'></i>
            </div>
            <div className="vertical"></div>
            <div className="credential">
            <img src=""/>
              <h5>Tristan</h5>
              <p>tristanboo9@gmail.com</p>
            </div>
            </div>
            </div>
          <div className="line2"></div>  
          <div className="container-bus">
      <div className="table-bus">
        <table>
          <thead className="table-header">
            <th className="header">Bus</th>
            <th className="header">License plate</th>
            <th className="header">Departure time</th>
            <th className="header">Arrival time</th>
          </thead>
         
          <tbody className="table-body">
            {busmanage.map((item) => (
              <tr className="table-row">
                <td className="item1">{item.Bus}</td>
                <td className="item2">{item.License}</td>
                <td className="item2">{item.departure}</td>
                <td className="item2">{item.arrival}</td>
                <td className="item3"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


</div>
          </div>
          </div>
        </>
    )
}
export default Admin2