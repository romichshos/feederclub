import React from 'react';
import './Contacts.css';
import Footer from '../Footer/Footer.jsx';

const Contacts = () => (
    <div className="contacts_container">
        <div className="contacts_header">
            <div className="contacts_div">

                <div className="contacts_text">НАПИШИТЕ НАМ</div>
            </div>
            <div></div>
        </div>
        <div className="contacts_content">
            <div className="contacts_list">
                <div className="contacts_type">EMAIL: <span>feedershostkaclub@gmail.com</span></div>
                <div className="contacts_type">FACEBOOK: <span>@FeederShostkaClub</span></div>
            </div>
            <div></div>
        </div>
        <Footer/>
    </div>

)

export default Contacts