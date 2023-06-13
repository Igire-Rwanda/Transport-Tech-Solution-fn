import React from "react";
import { useState } from "react";
import admindrivers from "../../constants/admindrivers";
import './admin.css'
import Sidebar from '../../component/sidebar'
import claims from "../../constants/claims";
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
           <th className="header">Claim ID</th>
           <th className="header">Passenger info</th>
           <th className="header">Driver info</th>
           <th className="header">Claim</th>
           <th className="header">Status</th>
         </thead>
         <tbody className="table-body">
           {claims.map((item) => (
             <tr className="table-row">
               <td className="item1">{item.claimId}</td>
               <td className="item2">{item.Passengerinfo}</td>
               <td className="item2">{item.Driverinfo}</td>
               <td className="item2">{item.claimId}</td>
               <td className="item2">{item.status}</td>
               <td className="item3">
               </td>
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