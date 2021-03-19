import React, {useState} from 'react'
import PopUp from '../PopUp'
import { GetInTouchCell,
         GetInTouchRow, 
         GetInTouchSectionContainer, 
         GetInTouchWrapper, 
         SectionHeading,
         GetInTouchInfoWrapper,
         GetInTouchImgWrapper,
         GetInTouchImg,
         GetInTouchLabel,
         GetInTouchDescription,
        } from '../GetInTouchSection/GetInTouchElements'
import { isMobile } from "react-device-detect";
import { CButtonLink } from '../Overview/OverviewElements';
import { EmailInp, BtnWrapper, CButton } from '../PopUp/PupUpElements';
import validator from 'validator'
import axios from 'axios'
import './MobileGetCVElements.css'

const MobileGetCVSection = () => {

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
        validatorSpan = <span style={{marginBottom:'20px', textAlign: 'center', marginLeft:'20px', fontSize: '14px', fontWeight: '900', color: 'green', }}>{emailError}</span> 
      } else {
        validatorSpan = <span style={{marginBottom:'20px',  textAlign: 'center', marginLeft:'20px', fontSize: '14px', fontWeight: '900', color: 'red', }}>{emailError}</span> 
      }

      const handleSubmit = event => {
        event.preventDefault();
    
        const payload = {
          email: email
        };
    
        axios.post(`https://api.amalvnair.com/avn/api/submit/email/`, { payload })

          .then(res => {
            // console.log(res);
            // console.log(res.data);
            alert(res.data['message'])
          })
      }

      
    if (isMobile) {

        return (
            <>
                <GetInTouchSectionContainer>
                    <GetInTouchWrapper>
                        <SectionHeading>
                            Submit Your Email
                        </SectionHeading>
                        <GetInTouchRow className="row">
                            <GetInTouchCell className="cell">

                                <GetInTouchImgWrapper className="imgWrap">
                                        <GetInTouchImg className="img" src={require('../../images/port_cv.svg').default} />
                                    </GetInTouchImgWrapper>
    
                                <GetInTouchInfoWrapper>
    
                                <EmailInp className='input' onChange={(e) => validateEmail(e)} />{validatorSpan}
                                <br/>

                                <span style={{textAlign: 'center', fontSize: '14px', fontWeight: '900', color: 'red' }}>
                                    By clicking submit, you agree that at the time of requesting my CV you are aware of the fact that it consists of sensitve information 
                                    and that you will not misuse the information provided in any manner.
                                </span>

                                <BtnWrapper>
                                    <CButton disabled={emailError === 'X' | emailError === '' } className="button"
                                    onClick = {handleSubmit}
                                    > Submit </CButton>
                                </BtnWrapper>

                                </GetInTouchInfoWrapper>
    
                            </GetInTouchCell>
                        </GetInTouchRow>
    
                    </GetInTouchWrapper>
    
                </GetInTouchSectionContainer>
            </>
        )

        }
    }
export default MobileGetCVSection
