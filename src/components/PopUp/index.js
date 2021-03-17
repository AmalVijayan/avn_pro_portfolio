import React, {useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { EmailInp, BtnWrapper, CButton } from './PupUpElements';
import './popUp.css'
import {FaRegWindowClose} from 'react-icons/fa'
import validator from 'validator'
import axios from 'axios'

const PopUp = ( { button, popContent } ) => {

    const axios = require('axios').default;

    const [emailError, setEmailError] = useState('') 

    const [email, setEmail] = useState('') 

    const validateEmail = (e) => { 
      var email = e.target.value 
      setEmail(email)
      // console.log('Email from ValidateEMail() ::', email)
      if (validator.isEmail(email)) { 
        setEmailError('✓') 
      } else { 
        setEmailError('X') 
      } 
    } 
    let validatorSpan;
    if (emailError === '✓') {
        validatorSpan = <span style={{ textAlign: 'center', marginLeft:'20px', fontSize: '20px', fontWeight: '900', color: 'green', }}>{emailError}</span> 
      } else {
        validatorSpan = <span style={{  textAlign: 'center', marginLeft:'20px', fontSize: '20px', fontWeight: '900', color: 'red', }}>{emailError}</span> 
      }


    const handleSubmit = event => {
        event.preventDefault();
    
        const payload = {
          email: email
        };
    
        axios.post(`http://api.amalvnair.com/avn/api/submit/email/`, { payload }, 
                                                                  {"headers":{
                                                                      "Access-Control-Allow-Origin": "*",
                                                                      'Content-Type': 'application/json',
                                                                      'Access-Control-Allow-Origin' : '*',
                                                                      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'}}
                                                                    )

          .then(res => {
            // console.log(res);
            // console.log(res.data);
            alert(res.data['message'])
          })
      }

      
    return (
        <Popup trigger={ button } position="center" modal nested>
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                <FaRegWindowClose/>
                </button>
                <div className="header"> Get CV </div>
                <div className="content">
                {' '}
                {popContent}
                </div>
                <div className="actions">
                    <EmailInp onChange={(e) => validateEmail(e)} />{validatorSpan}

                {/* <Popup
                    trigger={<BtnWrapper><CButton disabled={input.length<1} className="button"> Submit </CButton></BtnWrapper>}
                    position="top center"
                    nested
                >
                    <span>
                        Success!
                    </span>
                </Popup> */}
                <br/>

                <span style={{ textAlign: 'center', fontSize: '16px', fontWeight: '900', color: 'red' }}>
                    By clicking submit, you agree that at the time of requesting my CV you are aware of the fact that it consists of sensitve information 
                    and that you will not miss use the information provided in any manner.
                </span>

                <BtnWrapper>
                    <CButton disabled={emailError === 'X' | emailError === '' } className="button"
                    onClick = {handleSubmit}
                    > Submit </CButton>
                </BtnWrapper>

                </div>
            </div>
            )}
        </Popup>
    )
}

export default PopUp
