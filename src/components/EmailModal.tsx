import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "../scss/_emailModal.scss";

type Props = {
    modalIsOpen: boolean;
    setIsOpen: (value:boolean) => void;
}


const EmailModal = ({modalIsOpen, setIsOpen}:Props) => {
    const [sender, setSender] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [deliverTo, setDeliverTo] = useState<string>();
    const [subject, setSubject] = useState<string>();

    return (
        <div className='emailModal'>
            <Modal
                isOpen={modalIsOpen}
                contentLabel="Example Modal"
                className={'modal'}
            >
                <div className='content'>
                    <h2>Send the date request!</h2>
                    <div className="emailContent">
                        <div className='labelNMsg'>
                            <span className='labal'>From (email):</span>
                            <textarea onBlur={(v) => setSender(v.target.value)}/>
                        </div>
                        <div className='labelNMsg'>
                            <span className='labal'>To (email):</span>
                            <textarea onBlur={(v) => setDeliverTo(v.target.value)}/>
                        </div>
                        <div className='labelNMsg'>
                            <span className='labal'>Subject:</span>
                            <textarea onBlur={(v) => setSubject(v.target.value)}/>
                        </div>
                        <div className='labelNMsg'>
                            <span className='labal'>Message:</span>
                            <textarea className='message' onBlur={(v) => setMessage(v.target.value)}/>
                        </div>
                        <span className='sendButton'>SEND IT</span>
                    </div>
                </div>
        </Modal>
      </div>

    )
};

export default EmailModal;