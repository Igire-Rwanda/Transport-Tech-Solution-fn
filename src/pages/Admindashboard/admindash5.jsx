import React, { useState, useEffect } from 'react';
import './admin.css'
import Sidebar from '../../component/sidebar'
const userForm =()=>{
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [newRole, setNewRole] = useState('');
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('your-api-endpoint');
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       setErrorMsg('Failed to get users.');
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
    setCurrentRole(''); 
  };

  const handleNewRoleChange = (event) => {
    setNewRole(event.target.value);
  };

  const handleConfirmCheckboxChange = (event) => {
    setConfirmCheckbox(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (selectedUser === '' || newRole === '' || !confirmCheckbox) {
      setErrorMsg('Please fill in all the fields and confirm the role change.');
      return;
    }

   

//     const handleCancel = () => {
//     setSuccessMsg('Role change successful.');
//     setSelectedUser('');
//     setCurrentRole('');
//     setNewRole('');
//     setConfirmCheckbox(false);
// }
  };

    return (
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
      <h4 className='head'>User Role Change Form</h4>
      <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="user">User:</label>
          <select id="user" value={selectedUser} onChange={handleUserChange}>
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="currentRole">Current Role:</label>
          <input type="text" id="currentRole" value={currentRole} readOnly />
        </div>

        <div className="form-section">
          <label htmlFor="newRole">New Role:</label>
          <select id="newRole" value={newRole} onChange={handleNewRoleChange}>
            <option value="">Select a new role</option>
            <option value="driver">Driver</option>
            <option value="passenger">Passenger</option>
          </select>
        </div>

        <div className="form-section">
          <label className="confirm-checkbox">
            <input
              type="checkbox"
              id="confirmCheckbox"
              checked={confirmCheckbox}
              onChange={handleConfirmCheckboxChange}
            />
             I confirm that I want to change the role of the user.
          </label>
        </div>

        <div className="form-section">
          <button type="submit" disabled={!confirmCheckbox}>
            Save Changes
          </button>
          <button type="button" >
            Cancel
          </button>
        </div>
      </form>
      <div className="success-message">{successMsg}</div>
      <div className="error-message">{errorMsg}</div>
       
    </div>
    </div>
    </div>
    </>
    )
}
export default userForm;
