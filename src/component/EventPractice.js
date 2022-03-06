import React, { Component } from 'react';

class EventPractice extends Component {
    state={
        message : ''
    }
    render() {
        return (
            <div>
                <h1>EventPractice</h1>
                <input type="text" name="message" placeholder="Please input yourself"
                 value={this.state.message} onChange={(e)=>{this.setState({message: e.target.value})}}>
                </input>
                <button onClick={()=>{alert(this.state.message);
                                      this.setState({
                                          message : ''
                                      });
                                    }
                                }>Confirm</button>
            </div>
        );
    }
}

export default EventPractice;