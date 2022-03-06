import React, { useRef } from 'react';

const LocalValue = () => {
    const id = useRef(1);
    const setId = (n)=>{
        id.current = n;
    };
    const printId = () =>{
        console.log(id.current);
    };
    return (
        <div>
            
        </div>
    );
};

export default LocalValue;