import React, { useState } from "react";
import AddUser from "./User/AddUser";
import UserList from './User/UserList';

function App() {
  const [usersArr,setUsers] = useState([]) ;
  const addDataHandler = (username , age) =>{
          setUsers((prevUsers)=>{
           return([...prevUsers, {name:username , age : age , id : Math.random().toString()}]);
          });
  }

  return (
    <div>
      <AddUser onAddData={addDataHandler}></AddUser>
      <UserList users={usersArr}/>
    </div>
  );
}

export default App;
