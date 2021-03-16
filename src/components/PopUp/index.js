import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { EmailInp, BtnWrapper, CButton } from './PupUpElements';
import './popUp.css'
import {FaRegWindowClose} from 'react-icons/fa'

const PopUp = ( { button, popContent } ) => {
    return (
        <Popup trigger={ button } position="center" modal nested>
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                {/* &times; */}
                <FaRegWindowClose/>
                </button>
                <div className="header"> Get CV </div>
                <div className="content">
                {' '}
                {popContent}
                </div>
                <div className="actions">
                <EmailInp/>
                <Popup
                    trigger={<BtnWrapper><CButton className="button"> Submit </CButton></BtnWrapper>}
                    position="top center"
                    nested
                >
                    <span>
                        Success!
                    </span>
                </Popup>
                </div>
            </div>
            )}
        </Popup>
    )
}

export default PopUp
