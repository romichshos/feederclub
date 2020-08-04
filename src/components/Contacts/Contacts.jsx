import React, { useEffect } from 'react';
import './Contacts.css';
import Footer from '../Footer/Footer.jsx';
import {Element} from 'react-scroll';
import {useForm} from 'react-hook-form';



const Contacts = () => {
    const {register, handleSubmit, errors, reset } = useForm(/*{defaultValues: {
             name: "имя",
            email: "email",
             text: "ведите текст"}
    }*/
);
    const onSubmit = (data, e) => {console.log(data);
        reset({});
    };

    useEffect(async () => {
        const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
        reset(result); // asynchronously reset your form values
    }, [reset])
 return   (
        <div className="contacts_container">
            <div className="contacts_header">
                <div className="contacts_div">

                    <div className="contacts_text">НАПИШИТЕ НАМ</div>
                </div>
                <div className="contacts_wrap">
                    <form action="#" name="callback_form" method="post" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form_input">
                            <p><span className="span_header">Имя <span className="red">*</span></span>
                                <input ref={register({ required: true })} name="name" type="text"/></p>
                                {errors.name && 'Введите имя'}
                            <p>Email <span className="red">*</span>
                                <input ref={register({ required: true })} name="email" type="text"/></p>
                            {errors.email && 'Введите EMAIL'}
                        </div>
                        <p>Сообщение <span className="red">*</span></p>
                        <textarea ref={register({ required: true })} name='text'></textarea>
                        {errors.text && 'Введите текст'}
                        <div className="btn_block">
                            <input className="input_btn" type="submit" value="Отправить"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contacts_content">
                <div className="contacts_list">
                    <div className="contacts_type">EMAIL: <span>feederclub@feedershostka.com.ua</span></div>
                    <div className="contacts_type">АДРЕС: <span>г. Шостка Сумская область</span></div>
                </div>
                <div><Element name='Contacts'/></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts