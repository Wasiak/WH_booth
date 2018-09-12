import React from 'react';
import './Pages.css';

const page2 = ( props ) => {
    const style = {
        display: 'block',
        margin: 'auto'
    }

    return (
        <div className='Page'>
            <p>this is page 2, [personalization]</p>
            {/* <p>value1 is {props.state.value1}</p> */}
            
            {/* <button style={style} onClick={props.changeValue1}>set value1 as 'elo'</button> */}

            <label style={style}>set Event Title</label>
            <input style={style} placeholder='event title' onChange={props.changeTitle}></input>

            <label style={style}>set mail</label>
            <input style={style} placeholder='example@com.pl' onChange={props.changeMail}></input>

            {/* <label style={style}>select value 2</label>
            <select style={style} onChange={props.changeValue2}>
                <option value='eloelo'>eloelo</option>
                <option value='yoyoyo'>yoyoyo</option>
                <option value='siema'>siema</option>
                <option value='pozdro600'>pozdro600</option>
            </select> */}

            <button style={style} onClick={props.click}>go to page 3</button>
        </div>
    )
}

export default page2;