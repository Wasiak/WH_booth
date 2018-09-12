import React from 'react';
import './Pages.css';

const page1 = ( props ) => {
    return (
        <div className='Page'>
            <p>this is page 1</p>
            <button onClick={props.click}>go to page 2</button>
        </div>
    )
}

export default page1;