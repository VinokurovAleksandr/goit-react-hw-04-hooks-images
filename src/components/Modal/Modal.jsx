import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './modal.module.css'

const modalRoot = document.querySelector('#modal-root');


export function Modal ({onClose, showModal, children}) {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    });
    useEffect(() => {
        window.removeEventListener('keydown', handleKeyDown);
    });

    
   const handleKeyDown = e => {
        if (e.code === 'Escape') {

            onClose();
        }
    };

  const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {

            onClose();
        }
    };





    const {largeImageURL, tags} = showModal
        return createPortal(
            
             <div className={s.Overlay} onClick = {handleBackDropClick}>
                <div className={s.Modal}>
                    {children}
            <img src={largeImageURL} alt={tags} />
        </div>
            </div>,
            modalRoot,
            <div class="overlay">
                <div class="modal">
                    <img src="" alt="" />
                </div>
            </div>
        )
};



    
    
