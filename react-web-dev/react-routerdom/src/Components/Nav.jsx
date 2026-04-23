import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    const activeStyle = {
        color: "red",
        textDecoration: "underline"
    }
    const activeClassName = "active-link"
    const Links = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/about",
            name: "About"
        },
        {
            path: "/login",
            name: "Login"
        },
        {
            path: "/logout",
            name: "Logout"
        },
        {
            path: "/user",
            name: "User"
        }
    ]
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            {/* Method 1 */}
            {/* <Link to="/"><h3>Home</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
            <Link to="/login"><h3>Login</h3></Link>
            <Link to="/logout"><h3>Logout</h3></Link>
            <Link to="/user"><h3>User</h3></Link> */}

            {/* Method 2 */}
            {/* {Links.map((link) => (
                <Link key={link.path} to={link.path}>
                    <h3>{link.name}</h3>
                </Link>
            ))} */}

            {/* Method 3 */}
            {Links.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                >
                    <h3>{link.name}</h3>
                </NavLink>
            ))}
        </div>
    )
}