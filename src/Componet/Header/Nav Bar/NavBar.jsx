import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-5 px-5 shadow-md mt-5 rounded-lg ">
                <Logo></Logo>
                <ul className="flex gap-5">
                        <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-green-400 text-white font-semibold px-4 py-1" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorite" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 font-semibold text-white px-4 py-1" : ""}>Favorite</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-green-400 font-semibold text-white px-4 py-1" : ""}>Login</NavLink>
                        </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;