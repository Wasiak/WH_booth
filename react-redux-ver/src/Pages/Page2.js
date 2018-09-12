import React from 'react';
import './Pages.css';

const page2 = ( props ) => {
    return (
        <div className='Page'>
            <p>this is page 2</p>
            <p>value1 is {props.state.value1}</p>
            <button onClick={props.click}>go to page 3</button>
            <button onClick={props.changeValue1}>set value1 as 'elo'</button>
            <label>select value 2</label>
            <select onChange={props.changeValue2}>
                <option value='eloelo'>eloelo</option>
                <option value='yoyoyo'>yoyoyo</option>
                <option value='siema'>siema</option>
                <option value='pozdro600'>pozdro600</option>
            </select>
        </div>
    )
}

export default page2;