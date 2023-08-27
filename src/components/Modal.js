import React from "react";

const Modal = ({ children,onClose }) => {
  return (
    
  <div onClick={onClose}
  style={{
    zIndex:1,
    position:"absolute",
    left:"0px",
    top:"0px",
    backgroundColor:"#00000080",
    padding:"50px",
    width:"100%",
    height:"100%",}}>

    <div style={{
          zIndex: 1,
          position: "relative",
          backgroundColor: "#fff",
          margin: "100px",
          padding: "10px",
        }} onClick={e=>e.stopPropagation()}>
          <span style={{position:"absolute",right:"0px",top:"0px",color:"blue",cursor:"pointer"}} onClick={onClose}>X</span>{children}
        
        
        </div>

    
     </div>
    
);};

export default Modal;