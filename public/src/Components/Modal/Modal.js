import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const modal = ({show, children, toggleHandler, className}) => {
    return ReactDOM.createPortal(
        show?
        [
        <div className={`Modal ${className}`} key="1">
            {children}
        </div>,
        <div className="backdrop" key="2" onClick={toggleHandler}></div>
        ] :'',
        document.getElementById('modal-root')
        )
}

export default modal;