import React from 'react';
import './Pages.css';

const page3 = ( props ) => {
    return (
        <div className='Page'>
            <p>this is page 3 [user start page]</p>
            <p>{props.state.title}</p>
            <button onClick={props.click}>go to page 3 [START]</button>
        </div>
    )
}

export default page3;