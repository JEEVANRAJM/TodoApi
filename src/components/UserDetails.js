import React from 'react'

const UserDetails = ({user:{name,phone,email},onClose}) => {
    console.log(name,phone,email);
  return (
 <div style={
    {zIndex:1,position:"absolute",left:"0px",top:"0px",backgroundColor:"#00000080", padding:"50px", width:"300px",height:"300px",}} onClick={onClose}>
    <div style={{zIndex:1,position:"realtive",left:"0px",top:"16px",backgroundColor:"#fff",padding:"50px"}}>

   <div>
<span style={{position:"absolute",right:"58px",top:"50px",color:"blue",cursor:"pointer"}} onClick={onClose}>X</span>
    <b>User Details</b>
        
        {name ? (
         <div>
       
Name:{name}<br/>
Phone:{phone}<br/>
Email:{email}

</div> 
        
       ):(<div>No user selected</div>)}
        <br/>

        </div>

    </div>
    </div>
  )
}

export default UserDetails;