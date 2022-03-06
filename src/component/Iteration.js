import React, { useState } from 'react';

const Iteration = () => {

    const [names, setNames] = useState([

        {id : 1, text : 'snowman'},
        {id : 2, text : 'ice'},
        {id : 3, text : 'snow'},
        {id : 4, text : 'wind'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    // 새 항목 추가시 사용할 id
    const onChange = (e)=>{
        setInputText(e.target.value);
    }

    const onClick = () =>{
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });

        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
        // 등록후에 id값은 증가, 이름 변동, 텍스트는 초기화
    };

    const onRemove = (id) =>{
        const nexNames = names.filter(name=>name.id !== id);
        setNames(nexNames);
    };

    const nameList = names.map(name=><li key={name.id}
                                onDoubleClick={()=>onRemove(name.id)}>
                                {name.text}</li>);
    // 더블 클릭시 해당하는 목록의 name.id 키를 반환하여 onRemove함수에 전달
    return (
        <div>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>add</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default Iteration;