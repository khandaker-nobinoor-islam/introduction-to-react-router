import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <span>My website</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/users">Users</Link> */}
                {/* <Link to="/posts">Posts</Link> */}
                <NavLink to="/posts">Posts</NavLink>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
            </nav>
        </div>
    );
};

export default Header;