import { Outlet, Link } from "react-router-dom"
import Logo from '../assets/logo.png'

function NavBar() {
  return (
    <nav className='h-20 flex justify-between flex-row items-center text-lg'>
      <img className="flex w-20 h-full"
      src={Logo} alt="Logo" />
      <ul className='hidden md:flex text-white items-center w-2/4 mr-32 h-full flex-row justify-between list-none'>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
          </li>
        <li>
          <Link to="/register">Register</Link>
          </li>

      </ul>
      <Outlet/>
    </nav>
  )
}

export default NavBar
