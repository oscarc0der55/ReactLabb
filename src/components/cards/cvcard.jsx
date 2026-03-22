import "./cvcard.css";
import "../../style.css";

export default function Cvcard({title, bulletPoints = [bulletpointTitle, subbulletPoints]}) {

    return (
      <>
      <div className="cvcard">
        <h3 className="fontsize-large cvh3">{title}</h3>
        <ul>
          {bulletPoints.map((point, i) => (
            <li key={i}>
                <strong>{point.bulletpointTitle}</strong>
                <blockquote>{point.subbulletPoints}</blockquote>
            </li>
          ))}
        </ul>
        </div>
      </>
    );
}