import React from 'react';
import './Pages.css';

const page4 = ( props ) => {
    const style = {
        display: 'block',
        margin: 'auto'
    }

    return (
        <div className='Page'>
            <p>this is page 4, [image personalization]</p>
            {/* <p>value1 is {props.state.value1}</p> */}
            
            {/* <button style={style} onClick={props.changeValue1}>set value1 as 'elo'</button> */}

            <label style={style}>select frame</label>
            <select style={style} onChange={props.changeFrame} value={props.state.frame}>
                <option value='frame_1'>frame_1</option>
                <option value='frame_2'>frame_2</option>
                <option value='frame_3'>frame_3</option>
                <option value='frame_4'>frame_4</option>
            </select>

            <label style={style}>select filter</label>
            <select style={style} onChange={props.changeFilter} value={props.state.filter}>
                <option value='filter_1'>filter_1</option>
                <option value='filter_2'>filter_2</option>
                <option value='filter_3'>filter_3</option>
                <option value='filter_4'>filter_4</option>
            </select>
            
            <label style={style}>select layout</label>
            <select style={style} onChange={props.changeLayout} value={props.state.layout}>
                <option value='square_1'>square_1</option>
                <option value='square_4'>square_4</option>
                <option value='vertical'>vertical</option>
            </select>

            <button style={style} onClick={props.click}>go to page 5 [CAMERA]</button>
        </div>
    )
}

export default page4;