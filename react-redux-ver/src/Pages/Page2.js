import React from 'react';
import './Pages.css';

const page2 = ( props ) => {
    return (
        <div className='Page'>
            <p>this is page 2</p>
            <button onClick={props.click}>go to page 3</button>
        </div>
    )
}

export default page2;