import "./homepagecontainer.css";
import placeholder from '../../assets/null.png';


export default function Homepagecontainer() {
    return (
          <section className="middle">
                <div className="box flex-cols">
                    <h2 className="fontsize-larger">Min CV-Portal sida </h2>
                    <img src={placeholder} alt="Null symbol placeholder"/>
                    <p className="fontsize-large">Gjord i React, bygger på CV-Portal som finns i Portfolio sidan</p>
                
                </div>
                
            </section>
    );
}