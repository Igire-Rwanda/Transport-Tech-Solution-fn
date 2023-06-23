import React ,{useEffect,useState}from "react";
import "./booking.css";
import drivers from "../../../src/Driver";
import DriveSidebar from "../../component/Side/driveSidebar";
const Booking = () => {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODE5MGJlZTc3OGI3ZjNlNmNkMTAyMyIsImVtYWlsIjoibXVnaXNoYWVsdmlzNDU2QGdtYWlsLmNvbSIsImlhdCI6MTY4NjMwNjU5MH0.jwkmGiRnF_Xe06T5vuT4WCHAZ_t8AngNbYRcuqeUA0g';
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     };
  
  //     const response = await fetch('https://precious-tan-slug.cyclic.app/api/v2/booking/readAll', {
  //       headers: headers,
  //     });
  
  //     if (response.ok) {
  //       const jsonData = await response.json();
  //       setData(jsonData);
       
  //     } else {
  //       console.log('Request failed with status:', response.status);
  //     }
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // };

  return (
    <div className="driverContainer" id="booking-fix-error">
      <div className="sidebar">
        <DriveSidebar />
      </div>
      <div className="driverContent">

        <div className="KicukiroNyabugogoos">

          <span className="driverLocation">Kicukiro - Nyabugogo</span>
        </div>
        <div className="driverTable">
          <table>
            <thead className="table-header">
              <th className="header">No</th>
              <th className="header">Passengers</th>
              <th className="header">Seats Booked</th>
              <th className="header"> Booking Status</th>
            </thead>
            <tbody className="table-body">
              {drivers ? 
              drivers.map((item) => (
                <tr className="table-row">
                  <td className="item0">{item.no}</td>
                  <td className="item1">{item.name}</td>
                  <td className="item2">{item.seat}</td>
                  <td className="item3">
                    <div className="driverHolder">
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
