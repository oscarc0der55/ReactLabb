import Portcard from '../cards/portcard';
import './gitprojcontainer.css';
import {useEffect, useState} from 'react';
import '../../style.css';

export default function Gitprojcontainer({title, subtitle}) {
const [gitprojects, setGitProjects] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {

    const timeoutId = setTimeout(() => {

        fetch('https://api.github.com/users/oscarc0der55/repos')
            .then(response => response.json())
            .then(data => {
        setGitProjects(data.filter(project => project.language !== null));
        })
    .catch(error => {
    console.error('Error fetching GitHub projects:', error);
    })
    .finally(() => {
    setLoading(false);
    });
}, 2000);

return () => clearTimeout(timeoutId);
}, []);

    return (
            <section className="middle">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                            <div className="git-container">
                            {gitprojects.map(project => (
                                <Portcard 
                                key={project.id}
                                title={project.name} 
                                description={project.description}
                                language={project.language}
                                link={project.html_url} />
                            ))}
                        </div>
                    )}
            </section>

    );
}
