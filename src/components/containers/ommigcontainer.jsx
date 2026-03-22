import "./ommigcontainer.css";
import Githublogo from "../../assets/githublogo.webp";
import { useState, useEffect } from 'react';

export default function Ommigcontainer() {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = () => setIsKeyPressed(true);
        const handleKeyUp = () => setIsKeyPressed(false);

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (  
        <section className="middle flex-cols">
            <div className="ommain">
                <h2 className="fontsize-larger">Om Mig</h2>
            </div>
            <div className="ommain flex-rows">
                <p className="omp fontsize-normal">Hej, jag är en junior fullstackutvecklare som gjorde den här sidan som en liten guide för hur man bygger ett CV.
                    Jag lägger upp mina projekt på Github så om ni vill se mer av mina uppgifter så är det bara att titta på mitt portfolio.
                </p>
                <img className="omimg" src={Githublogo} alt="githublogo" />

            </div>
            <div className="ommain">
                <label htmlFor="demo">Skriv era förslag till förbättringar på sidan här:</label>
                <input type="text" id="demo" className={isKeyPressed ? 'key-pressed' : 'key-not-pressed'} />
                
            </div>
           </section>
           );

}
