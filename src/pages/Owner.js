import React from 'react'
import './Owner.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';
import ShuffleIcon from '@mui/icons-material/Shuffle';

function Owner() {
    return (
        <div className='owner-main'>
            {/* <div className="owner-self">Hello</div> */}
            <div className="owner-content">
                <div className="owner-heading">
                    <h1>Owner</h1>
                    <div className="owner-option">
                        <div className='owner-option-icon'>

                            <ShuffleIcon />
                        </div>
                        <div className='owner-option-info'>

                            Transfer Ownership
                        </div>
                    </div>
                </div>
            </div>
            <div className="owner-list">
                <h1>John Patt</h1>
                <div className='owner-email'>
                    <div className='owner-email-icon'><EmailIcon /></div>
                    <div className='owner-email-info'>john@gamil.com</div>
                </div>
                <div className='owner-mobile'>
                    <div className='owner-mobile-icon'><LocalPhoneIcon /></div>
                    <div className='owner-mobile-info'> +91-6745238756</div>

                </div>
                <div className="owner-note">
                    <div className='owner-note-icon'><InfoIcon /></div>
                    <div className='owner-note-info'> You are the owner of this academy</div>

                </div>
            </div>
        </div>
    )
}

export default Owner