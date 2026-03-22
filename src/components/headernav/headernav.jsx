import './headernav.css';
import {NavLink} from 'react-router-dom';

export default function Headernav({ variant = 'header' }) {
return (
    <nav className={`header-nav ${variant === 'footer' ? 'header-nav--footer' : ''}`}>
        <ul className = "rowlist">
            <li className="ulist"><NavLink to="/" activeClassName="active">Huvudsida</NavLink>
            </li>
            <li className="ulist"><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
            <li className="ulist"><NavLink to="/ommig" activeClassName="active">Om Mig</NavLink>
            </li>
            <li className="ulist"><NavLink to="/cv" activeClassName="active">CV</NavLink>
            </li>
        </ul>

    </nav>
);
}