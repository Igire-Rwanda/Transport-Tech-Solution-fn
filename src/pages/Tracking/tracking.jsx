import react from 'react';
import '../Tracking/tracking.css';
import { TrackingArray } from '../../constants/trackingc';
import {NyarugengeBusStop} from '../../constants/trackingc';
import {GasaboBusStop} from '../../constants/trackingc';
import { KicukiroBusStop } from '../../constants/trackingc';
import { useState } from 'react';


const Tracking = () =>{
    const [value,setPlaceholder] = useState("");
  const [show,setShow] = useState('BusStop Name');
  const [activate,setActivate] = useState(null);
  
const handleShow = (content) =>{
    setShow(content);
}
  const handleClickHeading = (content) =>{
    setActivate(content);
  }

     const onChange =(event) =>{
        setPlaceholder(event.target.value);
    }
    
    const onSearch = (searchTerm) =>{
        console.log('search',searchTerm);
    }
    return(
        <div className="container-tracking">
<div className='tracking-map-cont'>
<div className='tracking-map'>
<iframe width="595" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kigali%20bus%20stop,kigali%20city%20Kigali+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>


</div>
<div className='tracking-cont'>
<i class='bx bxs-bus'></i>
<h1>Rapid Arrival Bus</h1>
<i class='bx bx-dots-vertical-rounded'></i>
<h2>{show}</h2>


<h2><span>Driver</span><br></br>Driver Name<strong><i class='bx bxs-phone-call' ></i></strong></h2>
<button>Book Now</button>
</div>
</div>
<div className="content-tracking">
<div className="nav-tracking">
    <div className='nav-tracking-search'>
<div className="nav-heading">
<h2 onClick={() =>handleClickHeading(TrackingArray)}>Kigali Main Bus Stop</h2> 
</div>

 <div className="search-tracking">
<input type="text" placeholder="Search Here" onChange={onChange} className="tracking-input"/>
<i class='bx bx-search-alt-2' onClick={()=>onSearch(value)}></i>

</div>
</div>
<div className="menu-tracking">
<i class='bx bx-menu'></i>   
                    </div>
</div>
<div className='display-content'>
{!activate &&(<div className="tracking-body">
    { !activate && (<div className='main-bus'>
              {
                TrackingArray.map((bus) =>(
                <h2 key={bus.id}>{bus.BusStop}</h2>
                ))
            }
            </div>)}
            {activate && (<div className='gasabo-route'>
            {
               GasaboBusStop.map((bus) =>(
               <h2 key={bus.id}>{bus.BusStop}</h2>
                ))
            }
            </div>)}
            
            { activate && (<div className='nyarugenge-route'>
                        
             {
               NyarugengeBusStop.map((bus) =>(
                 <h2 key={bus.id}>{bus.BusStop}</h2>
                ))
            }
            </div>)}
           {activate && (<div className='kicukiro-route'>
           
            {
                KicukiroBusStop.map((bus) =>(
                    <h2 key={bus.id}>{bus.BusStop}</h2>
                ))
            }
            </div>) }
            </div>)}
            {activate && (<div className='Active-content'>
                {activate.map((bus) =>(
                    <h1 key={bus.id} onClick={() =>handleShow(bus.BusStop)}>{bus.BusStop}</h1>
                ))}
            </div>
)}
</div>
<div className="footer-tracking">
<div className="tracking-clippath" onClick={() =>handleClickHeading(GasaboBusStop)
    }>
    <h5>Gasabo Route</h5>
</div>
<div className="tracking-clipath" onClick={() =>handleClickHeading(KicukiroBusStop)}>
     <h5>Kicukiro Route</h5>
</div>
<div className="tracking-clipa" onClick={() =>handleClickHeading(NyarugengeBusStop)}>
<h5 >Nyarugenge Route</h5>
</div>
                </div>   
</div>
</div>
    );
}
export default Tracking;