import '../contact-us/contactUs.css';
import { BsFacebook, BsTwitter, BsInstagram, BsTelephone } from "react-icons/bs"
import { ImLocation } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import GoogleMapsLink from '../contact-us/GoogleMap';

import NavigationBar from '../navigation/NavigationBar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../../Api';


let Contact = () => {
    const navigate = useNavigate();
    const messagevalues = { name: "", email: "", message: "" }
    const [formValues, useFormvalues] = useState(messagevalues)
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        useFormvalues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendDataToBackend();
        setIsSubmit(true);
        // toast('Data Saved succesfully');
    };
    // useEffect(() => {
    //     console.log('formValues:', formValues);
    //     console.log('formErrors:', formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         sendDataToBackend();
    //     }
    // }, [formErrors]);
    const sendDataToBackend = async () => {


        try {
            const response = await fetch(`${BASE_URL}/api/v2/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            if (!response.ok) {
                throw new Error('Failed to save data');
            }
            else {
                // toast('message sent');
            }
            // console.log("response", response);
            // navigate('/login');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };
    const toastSuccess = () => toast.success('Message Sent');

    return (



        <div className='C-container'>

            <NavigationBar />

            <div className="contactUs">
                <div className="title">
                    <h1 >Get in Touch</h1>
                </div>
                <div className='box'>
                    {/* form of contact */}
                    <div className='contact form'>

                        {/* <h2>Send a Message</h2> */}
                        <form onSubmit={handleSubmit}>
                            <div className='formBox'>
                                <div className='row50'>
                                    <div className='inputBox'>
                                        <span>First Name</span>
                                        <input type='text' placeholder='John' required
                                            name='name'
                                            value={formValues.name}
                                            onChange={handleChange}
                                        >
                                            {formErrors.name && <p>{formErrors.name}</p>}
                                        </input>
                                    </div>
                                    <div className='inputBox'>
                                        <span>Last Name</span>
                                        <input type='text' placeholder='Doe' required></input>
                                    </div>
                                </div>

                                <div className='row50'>
                                    <div className='inputBox'>
                                        <span>Email</span>
                                        <input type='email' placeholder='Johndoe@example.com' required
                                            name='email'
                                            value={formValues.email}
                                            onChange={handleChange}>
                                            {formErrors.email && <p>{formErrors.email}</p>}
                                        </input>
                                    </div>
                                    <div className='inputBox'>
                                        <span>Mobile number</span>
                                        <input type='text' placeholder='+250 780 000 000' required
                                        ></input>
                                    </div>
                                </div>
                                <div className='row100'>
                                    <div className='inputBox'>
                                        <span>Message</span>
                                        <textarea placeholder='write your message here......'
                                            name="message"
                                            value={formValues.message}
                                            onChange={handleChange}
                                            {...formErrors.message && <p>{formErrors.message}</p>}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className='row100'>
                                    <div className='inputBox'>
                                        <input type='submit' value="Send" id='submit' onClick={toastSuccess} ></input>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* information about how to reach to our company for ex: through twitter*/}
                    <div className='contact info'>
                        <h3>Contact information</h3>
                        <div className='infoBox'>
                            <div>
                                <span></span>
                                <ImLocation id='icons' /> <p>Kacyiru Sector, Kigali City <br />Rwanda</p>
                            </div>
                            <div>
                                <span></span>
                                <FiMail id='icons' /> <a href='malito:teckcode@gmail.com'>teckcode@gmail.com</a>
                            </div>

                            <div>
                                <span></span>
                                <BsTelephone id='icons' /> <a href='tel: +250 780 000 000'>+250 780 000 000</a>
                            </div>

                            {/* social media handles */}
                            <ul className='sci'>
                                <li><a href="www.facebook.com"><BsFacebook /></a></li>
                                <li><a href="www.twitter.com"><BsTwitter /></a></li>
                                <li><a href="www.instagram.com"><BsInstagram /></a></li>
                            </ul>
                        </div>


                    </div>
                    {/* Location of our company on map  */}
                    <div className='contact map'>
                        <GoogleMapsLink />
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>

    );
}

export default Contact;
