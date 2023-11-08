import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { authContext } from "../AuthProvider/AuthProvider"


const NavBar = () => {
    const { user,logOut } = useContext(authContext)
    console.log(user)

    const handleSingOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const Navlinks = <>
    
    <li> <NavLink to='/'>Home</NavLink></li>
    <li> <NavLink to='/addBooks'>Add Book</NavLink></li>
    <li> <NavLink to='/allBooks'>All Books</NavLink></li>
    <li> <NavLink to='/BorrowedBook'>Borrowed Books</NavLink></li>
    </>
    return (
            <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <img className="w-48 rounded-lg" src="https://i.ibb.co/pR8V4t2/logo.png" alt="img" />
                    </div>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-2">

                        <img className="w-10  rounded-sm" src={user.photoURL} alt="" />
                        <h3 >{user.displayName}</h3>
                        <button onClick={handleSingOut} className="btn">Sign Out</button>
                    </div>
                        :
                        <Link to='/login'>Login</Link>

                }
            </div>
        </div>
    );
            }
export default NavBar;