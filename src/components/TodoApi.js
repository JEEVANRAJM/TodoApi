import { useEffect, useState } from "react";

const TodoApi = () => {
  const [users, setUsers] = useState([]); //intial value
  const[selecteduser,setSelecteduser] = useState({});
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
            if(selecteduser.id===id){
                setSelecteduser({});
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
                    if(editUser.id===selecteduser.id){

                        setSelecteduser(editUser);


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

          const handleCreate = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
              method: "POST",
              body: JSON.stringify(editUser),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
        const newUser = await response.json();
        setUsers((prevUser)=>[...prevUser,newUser]);
            
          };

      return( <div>
        TodoApi
       <div  style={{display:"flex"}}> 
       <div>
        {users.map((user)=><li key={user.id}><span onClick={()=>setSelecteduser(user)}>{user.name}</span>
        <button onClick={(e)=>handleDelete(e,user.id)}>Delete</button>
        <button onClick={()=>handleEdit(user)}>Edit</button>
        </li>)}
       </div>
     
        <div><b>User Details</b>
        
        {Object.keys(selecteduser).length >0 ? (
         <div>
{selecteduser.name}<br/>
{selecteduser.phone}<br/>
{selecteduser.email}
</div> 
        
       ):(<div>No user selected</div>)}
        <br/>

        </div>

      </div>
      <div style={{marginTop:"30px"}}>
     <label>Name:</label><input id ="name"value={editUser.name || "" } onChange={handleChange} /> <br/>
     <label>Phone:</label><input id="phone" value={editUser.phone || "" } onChange={handleChange} /> <br/>
     <label>Email:</label><input id="email" value={editUser.email || "" } onChange={handleChange} /> <br/>
      <button onClick={handleCreate}>Create</button>
      </div>
      </div>    
)}

export default TodoApi;