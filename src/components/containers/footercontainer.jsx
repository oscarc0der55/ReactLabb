import Headernav from '../headernav/headernav';
import './footercontainer.css';

export default function Footercontainer() {
    return (
        <footer className="main-footer">
            <div className="main-footer-top flex-rows">
               <Headernav variant="footer" />
           </div>
            <div className="main-footer-bottom flex-rows">
                <p className="fontsize-normal">2026 &#169; Oscar</p>
            </div>
        </footer>
    );
}