import React from 'react';
import './Pages.css';

const pageAdmin = ( props ) => {
    const style = {
        display: 'block',
        margin: 'auto'
    }

    return (
        <div className='Page'>
            <p>this is admin page </p>

            <label style={style}>set work time [h]</label>
            <input style={style} placeholder='1' onChange={props.changeWorkTime}></input>

            {/* onClick - printin and finally go to page-3 */}
            <button style={style} onClick={props.click}>start</button>

            <button style={style} onClick={props.startTimer}>start timer</button>
        </div>
    )
}

export default pageAdmin;