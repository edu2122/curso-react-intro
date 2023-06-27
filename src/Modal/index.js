import React from "react";
import ReactDOM from "react-dom";
import "./ModalStyles.css";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modal-background">
            <div className="Modal-content">
                {children}
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };