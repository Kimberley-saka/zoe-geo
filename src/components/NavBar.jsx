import { Outlet, Link } from "react-router-dom"
import Logo from '../assets/logo.png'

function NavBar() {
  return (
    <nav className='h-20 flex justify-between flex-row items-center bg-blue-500'>
      <img className="flex w-20 h-full"
      src={Logo} alt="Logo" />
      <ul className='hidden md:flex items-center w-1/2 h-full flex-row justify-between pr-6 list-none bg-amber-200'>
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
