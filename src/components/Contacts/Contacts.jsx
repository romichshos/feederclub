import React from 'react';
import './Contacts.css';
import Footer from '../Footer/Footer.jsx';

const Contacts = () => (
    <div className="contacts_container">
        <div className="contacts_header">
            <div className="contacts_div">

                <div className="contacts_text">НАПИШИТЕ НАМ</div>
            </div>
            <div className="contacts_wrap">
                <form action="#" name="callback_form" method="post">
                    <div className="form_input">
                     <p><span className="span_header">Имя <span className="red">*</span></span>
                     <input type="text"/></p>
                     <p>Email <span className="red">*</span>
                      <input type="text"/></p>
                    </div>
                    <p>Сообщение <span className="red">*</span></p>
                    <textarea name='text'></textarea>
                    <div className="btn_block">
                       <input className="input_btn" type="submit" value="Отправить"/>
                   </div>
                </form>
            </div>
        </div>
        <div className="contacts_content">
            <div className="contacts_list">
                <div className="contacts_type">EMAIL: <span>feedershostkaclub@gmail.com</span></div>
                <div className="contacts_type">АДРЕС: <span>г. Шостка Сумская область</span></div>
            </div>
            <div></div>
        </div>
        <Footer/>
    </div>

)

export default Contacts