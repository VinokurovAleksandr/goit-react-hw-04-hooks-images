import { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
      
        window.addEventListener('keydown',this.handleKeyDown);
    
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
         
    }
    


    handleKeyDown = e => {
        if (e.code === 'Escape') {

            this.props.onClose();
        }
    };

    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {

            this.props.onClose();
        }
    };

   
    render() {

        const {largeImageURL, tags} = this.props.showModal
        return createPortal(
            
             <div className={s.Overlay} onClick = {this.handleBackDropClick}>
                <div className={s.Modal}>
                    {this.props.children}
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
}}
  


    
    
