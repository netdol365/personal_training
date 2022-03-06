import React, { useState } from 'react';

const EventPractice1 = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = (e) => {setUsername(e.target.value)};
    // const onChangeMessage = (e) => {setMessage(e.target.value)};
    const [form,setForm] = useState({
        username : '',
        message : ''
    });

    const {username, message} = form;

    const onChange = (e) => {
        const nextForm ={
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
        // 복사하고 변경한 form을 set으로 등록
    };

    const onClick = () => {
        alert(username + ' : ' + message);
        setForm({
            username : '',
            message : ''
        });
        // setUsername('');
        // setMessage('');
    };

    const onKeyPress = (e) => {
        if(e.key==='Enter')
        {
            onClick();
        }
    };

    return (
        <div>
            <h1>EventPractice</h1>
            <input type="text" name="username" placeholder="please input your name"
            value={username} onChange={onChange}>
            </input>
            <input type="text" name="message" placeholder="please input message"
            value={message} onChange={onChange} onKeyPress={onKeyPress}>
            </input>
            <button onClick={onClick}>
                Confirm
            </button>   
        </div>
    );
};

export default EventPractice1;