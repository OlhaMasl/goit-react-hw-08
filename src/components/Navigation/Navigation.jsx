import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.navItems, isActive && s.active);
// };

    return (
        <div className={s.header}>
            <nav>
                <div className={s.navigation}>
                    <div><NavLink to="/" className={s.navItems}>Home</NavLink></div>
                    <ul className={s.pageNavigation}>
                    <li><NavLink to="register" className={s.navItems}>Register</NavLink></li>
                    <li><NavLink to="login" className={s.navItems}>Log In</NavLink></li>
                    <li><NavLink to="phonebook" className={s.navItems}>Phonebook</NavLink></li>   
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;