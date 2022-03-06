import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name,setName] = useState('');
    const [nickname, setNickname] = useState('');
    

    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return()=>{
            console.log('clean');
            console.log(name);
        }
    },[]);

    const onChangeName=(e) =>{
        setName(e.target.value);
    };

    const onChangeNickName=(e)=>{
        setNickname(e.target.value);
    };

    
    

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} 
                placeholder="please input your name"></input>
                <input value={nickname} onChange={onChangeNickName}
                placeholder="please inpuy your nickname"></input>
            </div>
            <div>
                <p>Name : <b>{name}</b></p>
                <p>Nickname : <b>{nickname}</b></p>
            </div>
            
        </div>
    );
};

export default Info;