import { Routes, Route } from 'react-router-dom'
import Home from '../Page/Home'
import About from '../Page/About'
import Login from '../Page/Login'
import Logout from '../Page/Logout'
import User from '../Page/User'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    )
}