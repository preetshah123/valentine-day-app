import React, {useState} from 'react';
import '../scss/_firstQuestion.scss';

type Props = {
    hide: boolean;
    setShow: (value:boolean) => void;
}

const FirstQuestion = ({hide, setShow}:Props) => {
    const [i, setI] = useState<number>(0);
    const statements = ['I have a very important question to ask you...', 'It goes without sayin... but I still wanted to make sure...']

    const handleOnClick = () => {
        if (i === 0) {
            setI(1);
        } else if (i===1) {
            setShow(true)
        }
    }
    
    if (hide) {
        return (
            <div>
            </div>
        )
    }
    return (
        <div className='firstQuestion'>
            <h1>{statements[i]}</h1> 
            <span className='firstQuestion__next' onClick={() => handleOnClick()}>Next</span>          
        </div>
    )
}

export default FirstQuestion;