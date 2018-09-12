import React from 'react';
import './Pages.css';

const page3 = ( props ) => {
    return (
        <div className='Page'>
            <p>this is page 3</p>
            <p>current value1 is {props.state.value1}</p>
            {/* <button onClick={props.click}>go to page 3</button> */}
        </div>
    )
}

export default page3;