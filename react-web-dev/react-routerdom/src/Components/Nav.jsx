import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
            <Link to="/login"><h3>Login</h3></Link>
            <Link to="/logout"><h3>Logout</h3></Link>
            <Link to="/user"><h3>User</h3></Link>
        </div>
    )
}