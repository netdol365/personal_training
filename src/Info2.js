import React, { useReducer } from 'react';

function reducer(state,action){
    return{
        ...state,
        [action.name] : action.value
    };
}

const Info2 = () => {
    const [state,dispatch] = useReducer(reducer,{
        name : '',
        nickname : ''
    });
    const {name, nickname} = state;

    const onChange=(e)=>{
        dispatch(e.target);
    };

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