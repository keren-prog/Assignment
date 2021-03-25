import React, { useState } from 'react';
import './Signup.css';
import Button from './Button';
import Inputfield from './Inputfield';
import pic from './Images/avatar.png';
// import  './Images/welcome-back.jpg';
import Checkbox from './Checkbox';

function Home() {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')


    function UpdateFirstname(e) {
        setFirstName(e.target.value);
    }
    function UpdateLastname(e) {
        setLastName(e.target.value);
    }
    function UpdateUsername(e) {
        setUsername(e.target.value);
    }
    function UpdateEmail(e) {
        setEmail(e.target.value);
    }
    function UpdatePassword(e) {
        setPassword(e.target.value);
    }
    function UpdateConfirmpassword(e) {
        setConfirmPassword(e.target.value);
    }
    function submit(e) {
        e.preventDefault();
    }

    console.log(username);
    return (
        <div className='maindiv'>
            <div className='formdiv'>
                <div className='leftdiv'>

                    <nav>
                        Welcome back
                        {/* {<img scr="welcome-back.jpg" alt=''> </img> } */}
                  </nav>
                    <p className="welcome">Are you new?, <br />To join our page, <br />Signup on the form on your right with your personal details. <br /><br /> Thank You.</p>
                     

                </div>

                <div className='rightdiv'>
                    <img className='avatar' src={pic}></img>
                    <section >  CREATE AN ACCOUNT</section>
                
                    <div >
                        <Inputfield  className='input'type='text' placeholder='First Name' marginBottom={10} onChange={UpdateFirstname} />
                        <Inputfield  className='input'type='text' placeholder='Last Name' marginBottom={10} onChange={UpdateLastname} />
                        <Inputfield  className='input'type='text' placeholder='Username' marginBottom={10} onChange={UpdateUsername} />
                        <Inputfield className='input' type='email' placeholder='Email' marginBottom={10} onChange={UpdateEmail} />
                        <Inputfield  className='input'type='password' placeholder='Password' marginBottom={10} onChange={UpdatePassword} />
                        <Inputfield  className='input'type='password' placeholder='Confirm password' onChange={UpdateConfirmpassword} />
                    </div>
                    <div className='bottomdiv'>
                        <Button text='SIGN UP' className='button' backgroundColor='#008080' color='#ffffff' />
                  </div>
                  <div className='checkboxdiv'>
                    <Checkbox type='checkbox' text="remember me" />
                  </div>


                </div>


            </div>

        </div>


    )
}

export default Home