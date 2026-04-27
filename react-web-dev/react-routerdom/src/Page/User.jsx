import { useEffect, useState } from "react"

export default function User() {
    const [user, setUser] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])  

    return (
        <div>
            <h1>User</h1>
            <ul>
                {user.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}