import React, {useState} from 'react';
import './App.scss';
import Flowers from './components/Flowers';
import Buttons from './components/Buttons';
import FirstQuestion from './components/FirstQuestion';
import Wasted from './components/Wasted';

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [pressedNo, setPressedNo] = useState<boolean>(false);

  return (
    <div className="App">
      <FirstQuestion hide={show} setShow={setShow}/>
      <Flowers show ={show}/>
      <Buttons show ={show} setPressedNo={setPressedNo}/>
      {pressedNo && (
        <Wasted/>
      )}
    </div>
  );
}

export default App;
