import React, { Component } from 'react';
import './Validation.css';

class Validation extends Component {
    state ={
        password : '',
        clickend : false,
        validated : false
    }

    handleChange=(e)=>{
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick=()=>{
        this.setState({
            clickend : true,
            validated : this.state.password === '0000'
        });
        this.input.focus();
        // input 태그에서 설정한 ref로 받은 this.input으로 focus설정
    }
    render() {
        return (
            <div>
                <input
                ref={(ref)=>this.input=ref} 
                type="password" value={this.state.password} onChange={this.handleChange}
                className={this.state.clickend ? (this.state.validated ? 'success' : 'failure') : ''}>
                {/* check 버튼을 누른 여부를 체크 => password가 맞는지 검증 여부확인 */}
                </input>     
                <button onClick={this.handleButtonClick}>
                    Check
                </button>
            </div>
        );
    }
}


export default Validation;