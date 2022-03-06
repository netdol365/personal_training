import React from 'react';
import useInputs from './component/useInput';


const Info2 = () => {
    // const [state,dispatch] = useReducer(reducer,{
    //     name : '',
    //     nickname : ''
    const [state,onChange] = useInputs({
        name : '',
        nickname : ''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name='name' onChange={onChange} value={name}></input>
                <input name='nickname' onChange={onChange} value={nickname}></input>
            </div>
            <div>
                <p>name : <b>{name}</b></p>
                <p>nickname : <b>{nickname}</b></p>
            </div>      
        </div>
    );
};

export default Info2;