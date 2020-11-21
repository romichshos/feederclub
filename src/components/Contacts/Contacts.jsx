import React, { useEffect, useState } from 'react';
import './Contacts.css';
import Footer from '../Footer/Footer.jsx';
import {Element} from 'react-scroll';
import {useForm} from 'react-hook-form';


const Contacts = () => {
     const {register, handleSubmit, errors, reset } = useForm(/*{defaultValues: {
              name: "Твое имя",
             email: "Твой email",
              text: "Твое сообщение нам"}
     }*/
 );
     const onSubmit = async (data) => {
              console.log(data);
              const result = await fetch(`http://localhost:3002/send`, {
                 method: 'POST',
                 body: JSON.stringify(data),
                 headers: {
                     'Content-Type': 'application/json'
                 }
             });
             reset({});
         };

    return   (
        <div className="contacts_container">
            <div className="contacts_header">
                <div className="contacts_div">

                    <div className="contacts_text">НАПИШИТЕ НАМ</div>
                </div>
                <div className="contacts_wrap">
                    <form name="callback_form" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_input">
                        <p><span className="span_header">Имя <span className="red">*</span></span></p>
                            {errors.name && 'Введите имя'}
                            <input ref={register({ required: true })} name="name" placeholder='Введите имя' type="text"/>
                        <p><span className="span_header">Email <span className="red">*</span></span></p>
                            {errors.email && 'Введите EMAIL'}
                            <input ref={register({ required: true })} name="email" type="text" placeholder="Введите EMAIL"/>
                    </div>
                    <p><span className="span_header">Сообщение <span className="red">*</span></span></p>
                        {errors.text && 'Введите текст'}
                    <textarea ref={register({ required: true })} name='text' placeholder='Введите текст' maxLength="40000"></textarea>
                    <div className="btn_block">
                        <input className="input_btn" type="submit" value="Отправить"/>
                    </div>
                 </form>
                </div>
            </div>
            <div className="contacts_content">
                <div className="contacts_list">
                    <div className="contacts_type">EMAIL: <span>feedershostka@yahoo.com</span></div>
                    <div className="contacts_type">АДРЕС: <span>г. Шостка Сумская область</span></div>
                </div>
                <div><Element name='Contacts'/></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts