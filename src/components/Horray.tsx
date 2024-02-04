import React, {useState} from 'react';
import loveGif from '../images/sending-love-giving-love.gif';
import '../scss/_horrayGif.scss';

const Horray = () => {

    return (
        <div className='horrayWrapper'>
            <div className='horrayGif'>
                <img src={loveGif} alt = "insert gif here"/>
            </div>
        </div>
    )

}

export default Horray; 