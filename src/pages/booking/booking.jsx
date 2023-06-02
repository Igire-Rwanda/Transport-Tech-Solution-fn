import React from "react";
import "./booking.css";
import drivers from "../../Driver";

const driver = drivers();

console.log(driver);

// { Students.map((item) => (
//     <div className="mappu">
//         <div className="name"><span > name: {item.name}</span></div>
//         <div className="age"><span > age: {item.age}</span></div>
//        </div>
// ) )}

const Booking = () => {
  return (
    <div className="container">
      {/* <div className="title">
      Booking
        </div> */}
      <div className="table">
        <table>
          <thead>
            <th>Passengers</th>
            <th>Seats Booked</th>
            <th> Booking Status</th>
          </thead>
          <tbody>
            {driver.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.seat}</td>
                <td>
                  <div className="holder">
                    <div className={item.accepted === false ? "box1" : ''}>Deny</div>
                    <div className={item.accepted === true ? "box2": ''}>Accept</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Booking;

/*************************************IF CONDITION******************************* */
// const name = 'glace'

// if (name === 'glace') return true
//   else false

// name === glace ? true : false



