import React from "react";
import admindrivers from "../../constants/admindrivers";
import './admin.css'
import Sidebar from '../../component/sidebar'
import { useState , useEffect } from "react";
const Admin1 =()=>{
  const [drivers, setDrivers] = useState(admindrivers);
  const toggleActions = (index) => {
    setDrivers((prevDrivers) => {
      const updatedDrivers = [...prevDrivers];
      updatedDrivers[index] = {
        ...updatedDrivers[index],
        Actions: !updatedDrivers[index].Actions,
      };
      return updatedDrivers;
    });
  };


  // const [driverData, setDriverData] = useState([]);
 

//  const getData=()=>{
//   useEffect(() => {
//     fetch("http://localhost:5000/api/v2/role/readAll?role=Driver")
//       .then((response) => response.json())
//       .then((driverData) => {setDriverData(driverData.data)
//       console.log(driverData)})
//       .catch((err) => console.log(err));
//   });
//  }

//   useEffect(() => {
//     getData();
//   }, []);
//    console.log(driverData);

 
  // return (
  //   <>
  //     <div className="admin-container">
  //       <Sidebar />
 

 
     return(
         <>
         <div className="admin-container">
         <div className="cont-side">
         <Sidebar/>
         </div>
 
        <div className="admin-content">
          <div className="upper-part">
            <div className="part-one">
              <h4>
                WELCOME <span style={{ color: "#009AC7" }}>Admin.</span>
              </h4>
            </div>
            <div className="upbar">
              <div className="upicons">
                <i class="bx bx-search"></i>
                <i class="bx bx-bell"></i>
              </div>
              <div className="vertical"></div>
              <div className="credential">
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
                  <p style={{ color: "#009AC7" }}>20</p>
                </div>
                <div className="icon" style={{ color: "#009AC7" }}>
                  <i class="bx bx-check-circle"></i>
                </div>
              </div>
              <div className="card2">
                <div className="first">
                  <h2>Blocked drivers</h2>
                  <p>5</p>
                </div>
                <div className="icon">
                  <i class="bx bx-x-circle"></i>
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
            {drivers.map((item,index) => (
              <tr className="table-row" key={index}>
                <td className="item1">{item.name}</td>
                <td className="item2">{item.contact}</td>
                <td className="item2">{item.status}</td>
                <td className="item3">
                <div className="holder">
  <div
    className={item.Actions ? "box2" : "box1"}
    onClick={() => toggleActions(index)}
  >
    <span className={item.Actions ? "unblock" : "block"}>
      {item.Actions ? "Unblock" : "Block"}
    </span>
  </div>
  <div
    className={!item.Actions ? "box2" : "box1"}
    onClick={() => toggleActions(index)}
  >
    <span className={!item.Actions ? "unblock" : "block"}>
      {!item.Actions ? "Unblock" : "Block"}
    </span>
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