import React from 'react'

const CreateUpdate = ({editUser,handleChange,isEdit,handleUpdate,handleCreate}) => {
  return (
    <div style={{marginTop:"30px"}}>
    <label>Name:</label><input id="name" value={editUser.name || "" } onChange={handleChange} /> <br/>
    <label>Phone:</label><input id="phone" value={editUser.phone || "" } onChange={handleChange} /> <br/>
    <label>Email:</label><input id="email" value={editUser.email || "" } onChange={handleChange} /> <br/>
     {/* <button onClick={handleCreate}>Create</button> */}
     <button onClick={isEdit? handleUpdate:handleCreate}>
       {isEdit? "Update":"create"}
       </button>
     </div>
  )
}

export default CreateUpdate;