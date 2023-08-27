import React from 'react'

const UserDetails = ({user:{name,phone,email},onClose}) => {
    console.log(name,phone,email);
  return (
 <div>
  <div><div>

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