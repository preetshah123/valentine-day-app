import React, {useState} from 'react';
import wastedGif from '../images/wasted.gif';
import '../scss/_wasted.scss';


const Wasted = () => {
    return (
        <div className='gif'>
            <img src={wastedGif} alt ="loading"></img>
            <h1>RIP... <br></br> Refresh to try again sigh :(</h1>
        </div>
    )
};

export default Wasted;