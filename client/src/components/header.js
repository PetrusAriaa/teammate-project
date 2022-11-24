import './style.css';
import logo from '../assets/gamaforce.png';

function Header() {
    return (
        <div id="header">
            <img src={logo}></img>
            <h2> Gamaforce </h2>
        </div>
    )

}
export default Header;