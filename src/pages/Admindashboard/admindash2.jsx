import React from "react";
import admindrivers from "../../constants/admindrivers";
import './admin.css'
import Sidebar from '../../component/sidebar'
const Admin1 =()=>{
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
        <div className="drivers">
            <h2>Drivers</h2>
            <div className="cards">
            <div className="card1">
              <div className="first">
              <h2>Active drivers</h2>
              <p style={{color:'#009AC7'}}>20</p>
              </div>
              <div className="icon" style={{color:'#009AC7'}}>
              <i class='bx bx-check-circle'></i>
              </div>
            </div>
            <div className="card2">
            <div className="first">
              <h2>Blocked drivers</h2>
              <p>5</p>
              </div>
              <div className="icon">
              <i class='bx bx-x-circle'></i>
              </div>
            </div>
            </div>
            <h4>All drivers</h4>

            <div className="container-driver">
      
      <div className="table">
        <table>
          <thead className="table-header">
            <th className="header">Name</th>
            <th className="header">Contact</th>
            <th className="header">Status</th>
            <th className="header">Actions</th>
          </thead>
          <tbody className="table-body">
            {admindrivers.map((item) => (
              <tr className="table-row">
                <td className="item1">{item.name}</td>
                <td className="item2">{item.contact}</td>
                <td className="item2">{item.status}</td>
                
                <td className="item3">
                  <div className="holder ">

                <div className={item.Actions === false ? "box1" : ''}>
                  <span className="block">Block</span>
                  </div>
                <div className={item.Actions === true ? "box2" : ''}>
                <span className="unblock">Unblock</span>
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
          </div>
          </div>
        </>
    )
}
export default Admin1