import React from 'react';

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

const Modal = ({children, title, onClose}: ModalProps) => {
    return (
        <>
            <div
                className="popup__background fixed"
                onClick={onClose}
            />
            <div className="popup__window fixed">
                <h1 className="popup__title">{title}</h1>
                {children}
            </div>
        </>
    );
};

export default Modal;