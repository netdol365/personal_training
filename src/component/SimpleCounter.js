import React, { useState } from 'react';

const SimpleCounter = () => {

    const [value,setValue] = useState(0);
    

    return (
        <div>
            <p>Current Value : <b>{value}</b></p>
            <button onClick={()=>setValue(value+1)}>+1</button>
            <button onClick={()=>setValue(value-1)}>-1</button>
        </div>
    );
};

export default SimpleCounter;