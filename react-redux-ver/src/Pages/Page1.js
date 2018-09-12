import React from 'react';
import './Pages.css';

const page1 = ( props ) => {
    return (
        <div className='Page'>
            <p>this is welcome page 1</p>
            <p>here company name, logo, some samples</p>
            <button onClick={props.click}>Start personalization</button>
        </div>
    )
}

export default page1;