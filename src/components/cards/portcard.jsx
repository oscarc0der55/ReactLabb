import './portcard.css';

export default function Portcard({title, description, language, link, webpage}) {
    return (
        <div className="portcard">
            <div className='portcards'>

            <h3>{title}</h3>
            <p>{description}</p>
            {typeof webpage === 'string' && <a href={webpage} target="_blank" rel="noreferrer">Se webbplatsen</a>}
                <p>Språk: {language}</p>
                <a href={link} target="_blank" rel="noreferrer">Länk till projektet</a>
            </div>
        </div>
    );
}