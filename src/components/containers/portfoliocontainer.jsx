import './portfoliocontainer.css';
import Gitprojcontainer from './gitprojcontainer';


export default function Portfoliocontainer() {

    return (
         <section className="middle">
            <div className="portm">
                   <h1>Portfolio</h1>
                     <Gitprojcontainer title="Mina GitHub-projekt" subtitle="Här är mina projekt som jag har lagt upp på GitHub. Visa saknar en beskrivning" />
            </div>
         
           </section>
    );
}