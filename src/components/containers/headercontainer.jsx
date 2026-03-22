import Headernav from "../headernav/headernav";
import './headercontainer.css';
import Changebg from "../eastereggs/changebg";

export default function Headercontainer({theme, setbgimg}) {

    return (
        <header className="headercontainer">
            <h1>CV-Portal</h1>
            <Headernav />
            <Changebg theme={theme} toggleTheme={setbgimg} />
            

        </header>
    );
}