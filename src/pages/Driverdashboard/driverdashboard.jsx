import Chart from '../../pages/image/chartii.png';
import { FaPoll, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import './driverdashboard.css'
import DriverSidebar from '../../component/Side/driveSidebar';


function Driver() {
  return (
    <div className="driverscontainer"  id='driverdashboard-fix-error'>
        <div className="sidebar">
        <DriverSidebar/>
      </div>
      <div className='wrap-driverdashboard'>
      <div className="dailyholder">
        <div className="driverscontent">
        <FaPoll className="reporticon"/>
        </div>
        <div className="driverscontent">
          <span className="report">Report</span>
        </div>
      </div>

      <div className="dateholder">
      
        <div className="driverdate">
          <span className="date-year"><FaCaretLeft />31 may 2023   <FaCaretRight /></span>
        </div>
    
      </div>

      <div className="alerts">12 Alerts</div>

      <div className="chart">
        <img src={Chart} alt="" className="driverchart" />
      </div>

      {/* <div className="daysholder">
        <div className="daysofweek">
          <span className="sunday">S</span>
        </div>
        <div className="daysofweek">
          <span className="monday">M</span>
        </div>
        <div className="daysofweek">
          <span className="tuesday">T</span>
        </div>
        <div className="daysofweek">
          <span className="wednesday">W</span>
        </div>
        <div className="daysofweek">
          <span className="thursday">T</span>
        </div>
        <div className="daysofweek">
          <span className="friday">F</span>
        </div>
        <div className="daysofweek">
          <span className="saturday">S</span>
        </div>
      </div> */}

      <div className="carholder">
        <div className="col">
          <div className="caralerts">
          <div className="box11"></div>
            <div className="sunday">Seat belt alerts -1</div>
          </div>
          <div className="caralerts">
            <div className="box22"></div>
            <div className="monday">Over speed alerts -5</div>
          </div>
        </div>

        <div className="col">
          <div className="caralerts">
            <div className="box33"></div>
            <div className="tuesday">Harsh brake alerts -3</div>
          </div>
          <div className="caralerts">
            <div className="box4"></div>
            <div className="wednesday">Car-idling alerts -3</div>
          </div>
        </div>
      </div>

      <div className="feedbackholder">
        <div className="driverfeedback">Total Trips:</div>
        <div className="driverfeedback">Total distance Driven:</div>
        <div className="driverfeedback">Highest speed of all day:</div>
      </div>
      </div>
    </div>
  );
}

export default Driver;
