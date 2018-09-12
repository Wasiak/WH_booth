import React from 'react';
import './Pages.css';

const page5 = ( props ) => {
    return (
        <div className='Page'>
            <p>this is page 5 [CAMERA]</p>
            <p>{props.state.title}</p>
            <button onClick={props.click}>go to page 6 [PRINT OPTIONS]</button>
        </div>
    )
}

export default page5;