import { Outlet, Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className=' bg-blue-500'>
      <ul className='flex list-none'>
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
