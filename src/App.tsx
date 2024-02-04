import React, {useState} from 'react';
import './App.scss';
import Flowers from './components/Flowers';
import Buttons from './components/Buttons';
import FirstQuestion from './components/FirstQuestion';
import Wasted from './components/Wasted';
import EmailModal from './components/EmailModal';

function App() {
  const [show, setShow] = useState<boolean>(true);
  const [pressedNo, setPressedNo] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <FirstQuestion hide={show} setShow={setShow}/>
      <Flowers show ={show}/>
      <Buttons show ={show} setPressedNo={setPressedNo} setIsOpen={setIsOpen}/>
      {pressedNo && (
        <Wasted/>
      )}
      {modalIsOpen && (
        <EmailModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      )}
    </div>
  );
}

export default App;
