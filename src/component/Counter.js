import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     };
    //     // state의 초기값 설정...
    // }
    state={
        number : 0,
        fixedNumber : 0
    };
    render() {

        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber : {fixedNumber}</h2>
                <button onClick={()=>{
                    this.setState(prevState=>{
                        return{
                            number : prevState.number +1
                        };
                    },()=>{
                        console.log('call the setState()...');
                    });
                }}>
                {/* 버튼을 클릭할때마다 setState를 이용해서 값을 변경 */}
                +1
                </button>
            </div>
        );
    }
}


export default Counter;