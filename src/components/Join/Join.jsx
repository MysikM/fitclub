import './join.css';
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_USER_ID').then((res) => {
            console.log(res.text);
        }, (error) => {
            console.log(error.text);
        })
    }
    return (
        <div className='join' id='join-гы'>
            <div className="left-j">
                <hr/>
                <div>
                    <span className='stroke-text'>Ready to</span>
                    <span>Level up</span>
                </div>
                <div>
                    <span>Your body</span>
                    <span className='stroke-text'>With us?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className='email-container' onSubmit={(e) => sendEmail(e)}>
                    <input
                        type="email"
                        name='user_email'
                        placeholder='Enter your Email address'
                    />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    );
};

export default Join;