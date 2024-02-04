import React, {useState} from 'react';
import '../scss/_buttons.scss';
import Confetti from 'react-confetti';
import Horray from './Horray';

type Style = {
    left: string;
    top: string;
}

type Props = {
    show: boolean;
    setPressedNo: (value: boolean) => void;
}

const valueList = [
    'YOU MF',
    'ZOOM ZOOM MF',
    'CANT CATCH ME',
    'YOU THOUGHT BITCH',
    'IM FAST',
    "NOPPEE, TRY AGAIN!",
    "SMD",
    ":(",
    "I MIGHT CRY"
]

const Buttons = ({show, setPressedNo}:Props) => {
    const { width, height } = {width: window.innerWidth, height: window.innerHeight};
    const [style, setStyle] = useState<Style>();
    const [value, setValue] = useState<string>('No');
    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('Will you be my Valentine?')

    const mouseEnter = () => {
        const newStyle = {
            left:(Math.random()*90)+"%",
	        top:(Math.random()*90)+"%",
        };
        setStyle(newStyle);
        setValue(valueList[(Math.floor(Math.random() * valueList.length))]);
    }

    const clickYes = () => {
        setShowConfetti(true);
        setTitle('HOORRRRAYYYYY!!')
    }

    if (show) {
        return (
            <div className="buttonWrapper">
                {showConfetti && (
                    <Confetti
                        width={width}
                        height={height}
                        recycle={true}
                        numberOfPieces={1000}
                        colors={['#ffffff','#ffc5e6','#ff257e','#ff2644','#d60000']}
                    />
                )}
                {showConfetti && (
                    <Horray/>
                )}
                <div className='title'>
                    <h1>{title}</h1>
                </div>
                {!showConfetti && (
                    <div className='buttons'>
                        <div className="btn-wrap static" onClick={() => clickYes()}>
                            <a href="javascript:void(0)" className="btn" title="Yes">
                                <span>Yes</span>
                            </a>
                        </div>
                        <div className="btn-wrap tricky" onMouseEnter={() => mouseEnter()} style ={style}>
                            <a href="javascript:void(0)" className="btn" title="No" onClick={() => setPressedNo(true)}>
                                <span>{value}</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Buttons;