import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import CreateUpdate from "./CreateUpdate";
import Modal from "./Modal";

const TodoApi = () => {
  const [users, setUsers] = useState([]); //intial value
  const[selectedUser,setSelectedUser] = useState({});
  const[editUser,setEditUser] = useState({});
  const [isEdit,setEdit]=useState(false);
  const [isModalTwoOpen,setIsModalTwoOpen] =useState(false);
  
    useEffect(()=>{
        // console.log("users>>>",users);
        fetch("http://localhost:3004/users")
        .then((response) => response.json())
        .then((json) => setUsers(json));

    },[]);

    const handleDelete=(e,id)=>{

        fetch(`http://localhost:3004/users/${id}`, {
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
           
                fetch(`http://localhost:3004/users/${editUser.id}`, {
                method:"PUT",
                 body:JSON.stringify(editUser),
                 headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
               
            })
                .then((response) => response.json())
                .then((json) => {
                    
                    setIsModalTwoOpen(false);
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
            setIsModalTwoOpen(true);
            setEditUser(user);
            setEdit(true);

        }

        const handleChange = (event)=>{
            setEditUser({...editUser,[event.target.id]: event.target.value});
        //     if(event.target.id==="name"){
        //     setEditUser({...editUser,name:event.target.value});
        // }



          }

          const handleCreate = async () => {
            const response = await fetch("http://localhost:3004/users", {
              method: "POST",
              body: JSON.stringify(editUser),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
             
            });
        
        const newUser =await response.json();
        setIsModalTwoOpen(false);
        setUsers((prevUser)=>[...prevUser,newUser]);    // setUsers([...users,newUser]);
        setEditUser({});
       
          };

      return( 
      <div>
        TodoApi
         <button onClick={()=>{
            setIsModalTwoOpen(true)
          
     setEdit(false);
     setEditUser({});

        }}>Add User</button>
       <div  style={{display:"flex"}}> 
       <div>
        {users.map((user)=><li key={user.id}><span onClick={()=>setSelectedUser(user)}>{user.name}</span>
        <button onClick={(e)=>handleDelete(e,user.id)}>Delete</button>
        <button onClick={()=>handleEdit(user)}>Edit</button>
        </li>)}
       </div>
     
       

      </div>
     
      
      {selectedUser.name && ( 
      <Modal onClose={()=>setSelectedUser({})}>
      <UserDetails 
      user={selectedUser} 
      
      />
      </Modal>
       )}
      {isModalTwoOpen && (<Modal onClose={()=>setIsModalTwoOpen(false)}><CreateUpdate editUser={editUser} handleChange ={handleChange} isEdit={isEdit} handleUpdate={handleUpdate} handleCreate={handleCreate}/></Modal>)}
      </div>    
);};

export default TodoApi;