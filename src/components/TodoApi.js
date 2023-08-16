import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";

const TodoApi = () => {
  const [users, setUsers] = useState([]); //intial value
  const[selectedUser,setSelectedUser] = useState({});
  const[editUser,setEditUser] = useState({});
  
    useEffect(()=>{
        // console.log("users>>>",users);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));

    },[]);

    const handleDelete=(e,id)=>{

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method:"DELETE",
    })
        .then(response => response.json())
        .then(json => {

            let tempUsers = [...users];
            tempUsers = tempUsers.filter((user=>user.id !==id));
            setUsers(tempUsers); 
            if(selectedUser.id===id){
                setSelectedUser({});
            }

            if(editUser.id===id){
                setEditUser({});


            }
        }
        
            );};

    const handleUpdate=()=>{
           
                fetch(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, {
                method:"PUT",
                 body:JSON.stringify(editUser),
               
            })
                .then((response) => response.json())
                .then((json) => {
        
                    let tempUsers = [...users];
                    tempUsers = tempUsers.map((u) => {
                         if(u.id === editUser.id){
                         return editUser;
                        }
                        else{
                            return u;
                        }
                    });
                    setUsers(tempUsers); 
                    if(editUser.id===selectedUser.id){

                        setSelectedUser(editUser);


                    }
                    setEditUser({});//for updating clear input field
                });};

        const  handleEdit = (user)=>{
            setEditUser(user);

        }

        const handleChange = (event)=>{
            setEditUser({...editUser,[event.target.id]: event.target.value});
        //     if(event.target.id==="name"){
        //     setEditUser({...editUser,name:event.target.value});
        // }



          }

      return( <div>
        TodoApi
       <div  style={{display:"flex"}}> 
       <div>
        {users.map((user)=><li key={user.id}><span onClick={()=>setSelectedUser(user)}>{user.name}</span>
        <button onClick={(e)=>handleDelete(e,user.id)}>Delete</button>
        <button onClick={()=>handleEdit(user)}>Edit</button>
        </li>)}
       </div>
     
       

      </div>
      <div style={{marginTop:"30px"}}>
     <label>Name:</label><input id ="name"value={editUser.name || "" } onChange={handleChange} /> <br/>
     <label>Phone:</label><input id="phone" value={editUser.phone || "" } onChange={handleChange} /> <br/>
     <label>Email:</label><input id="email" value={editUser.email || "" } onChange={handleChange} /> <br/>
      <button disabled={!editUser.id} onClick={handleUpdate}>Update</button>
      </div>
      {selectedUser.name && <UserDetails user={selectedUser} onClose={()=>setSelectedUser({})}/>}
      </div>    
)}

export default TodoApi;