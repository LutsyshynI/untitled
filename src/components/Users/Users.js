import {useState,useEffect} from 'react'
import User from './User'

export default function Users() {
    let [users, setUsers] = useState([])
let[user,setUser]= useState(null)
    const but=(obj)=>{
        setUser(obj)

    }
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value)
        })
    },[])

    return (
        <div>
            <hr/>
            {/*{JSON.stringify(user)}*/}
            {user.id}-{user.name} <br/>
            {user.email}
            <hr/>
            {users.map((user,index)=>(<User item={user}  key={index} but={but}/>))}
        </div>
    )
}