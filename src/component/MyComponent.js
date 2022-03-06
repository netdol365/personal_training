import React, { Component } from 'react';
import propTypes from 'prop-types';

// const MyComponent = ({name,children,favoriteNumber}) => {
//     return (
//         <div>
//             Hi, my name is {name}...<br/>
//             children val : {children}...<br/>
//             my favorite number : {favoriteNumber}...
//         </div>
//     );
// };



class MyComponent extends Component {

    static defaultProps={
        name : 'default_name'
    }
    static propTypes={
        name : propTypes.string,
        favoriteNumber : propTypes.number.isRequired
    }

    render() {
        const {name, children, favoriteNumber} = this.props;
        return (
            <div>
                Hi, my name is {name}...<br/>
                children val : {children}...<br/>
                my favorite number : {favoriteNumber}...
            </div>
        );
    }
}




// MyComponent.defaultProps={ name : 'default_name'};
// MyComponent.propTypes={name:propTypes.number,
//                        favoriteNumber:propTypes.number.isRequired};


export default MyComponent;