import React, { useCallback, useMemo, useState, useRef } from 'react';

const getAverage = (numbers) =>{
    console.log('Cacaulting....');
    if(numbers.length===0)
    {
        return 0;
    }
    const sum = numbers.reduce((a,b)=>a+b); // reduce((누적값, 현재값, 인덱스, 요소) => {return 결과},초기값)
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback((e)=>{
        setNumber(e.target.value);
    },[]);
    // callback 함수를 추가하여 onChange가 컴포넌트 처음 렌더링 시만 수행
    // useCallBack(생성함수,[변동대상])

    const onInsert = useCallback((e)=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number,list]);
    // number혹은 list가 변동시에만 함수를 생성

    const onKeyPressed = (e)=>{
        if(e.key==='Enter'){
            onInsert();
        }
    };

    const avg = useMemo(()=>getAverage(list),[list]);
    // list가 변동할때만 getAverage 함수가 실행

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} onKeyPress={onKeyPressed}></input>
            <button onClick={onInsert}>Add</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                Average : <b>{avg}</b>
            </div>
        </div>
    );
};

export default Average;