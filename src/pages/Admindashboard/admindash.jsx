import React from "react";
import './admin.css'
import Sidebar from '../../component/sidebar'
import { Card } from "../../constants";
const Admin = ()=>{
  return(
    <>
    <div className="admin-container">
      <div className="cont-side">
        <Sidebar/>
        </div>
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
           
              <h5>Tristan</h5>
              <p>tristanboo9@gmail.com</p>
            </div>
            </div>
            </div>
     <div className="card-admin">
            {Card.map((data) => (
               <div className="blue-card">
                <h1>{data.icon}</h1>
                <p>{data.number}</p>
                <button>{data.button}</button>
               </div>
            ))}
          </div>
      </div>
      
        </div>
    </>
  )
}
export default Admin