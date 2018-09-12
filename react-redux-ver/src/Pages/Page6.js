import React from 'react';
import './Pages.css';

const page6 = ( props ) => {
    const style = {
        display: 'block',
        margin: 'auto'
    }

    return (
        <div className='Page'>
            <p>this is page 6, [print options]</p>

            <label style={style}>set copy number</label>
            <input style={style} placeholder='1' onChange={props.changeCopyAmount}></input>

            {/* onClick - printin and finally go to page-3 */}
            <button style={style} onClick={props.click}>print</button>
        </div>
    )
}

export default page6;