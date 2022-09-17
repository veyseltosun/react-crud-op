import React from 'react'
import {useState} from "react";


function Users() {
    const initialState = [{id: 1, data:"alış veriş yap"}, {id:2, data:"toplantya git"}];


    const[user, setUser] = useState(initialState);
    
    

  return (
    <div>
        {user.map((usr, id) => (
            <div key={id} >{usr.data}</div>

        ))
            
        }
        

    </div>
  )
}

export default Users