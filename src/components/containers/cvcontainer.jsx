import "./cvcontainer.css";
import Project from '../../assets/projects.json';
import Education from '../../assets/education.json';
import Job from '../../assets/job.json';
import Language from '../../assets/language.json';
import CVcard from '../cards/cvcard';
import {useEffect, useState} from "react";  


export default function Cvcontainer({ cvTitle }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(Project.projekt ?? []);
    }, []);

    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation(Education.utbildning ?? []);
    }, []);

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(Job.erfarenheter ?? []);
    }, []);

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        setLanguages(Language.språkkunskaper ?? []);
    }, []);

    return (
         <section className="middle">
                <div className="cvmain flex-cols">
                    <h2 className="fontsize-larger">CV-Guide</h2>
                    <h3 className="fontsize-large cvh3">Introduktion</h3>
                    <p className="fontsize-normal cvp">Här skriver du ditt namn, din gmail gmail, linkedin och github med länkar. 
                        Det gör det enklare för företag att få kontakt med dig och sedan vad du håller på med.
                    </p>
                    <h3 className="fontsize-large cvh3">Sammanfattning</h3>
                    <p className="fontsize-normal cvp">Här skriver du ned en sammanfattning om dig själv som angår jobbansökan
                        ,som dina kompetenser och arbetssätt på ett kortfattat sätt.
                    </p>
                    <h3 className="fontsize-large cvh3">Teknisk kompetens</h3>
                    <p className="fontsize-normal cvp">Här ska programmeringsspråk du kan, vilka arbetsverktyg du använder (som visual studio eller github)
                        och sedan modellering och kravhantering.
                    </p>
                    <h3 className="fontsize-large cvh3">{cvTitle}</h3>
                    <CVcard title="Projekt" bulletPoints={projects.map((project) => ({ bulletpointTitle: project.title, subbulletPoints: project.description, bulletpointLink: project.link }))} />
                    <CVcard title="Utbildning" bulletPoints={education.map((edu) => ({ bulletpointTitle: edu.name, subbulletPoints: `${edu.school} - ${edu.description} (${edu.duration})` }))} />
                    <CVcard title="Erfarenheter" bulletPoints={jobs.map((job) => ({ bulletpointTitle: job.name, subbulletPoints: job.description}))} />
                    <CVcard title="Språkkunskaper" bulletPoints={languages.map((lang) => ({ bulletpointTitle: lang.language, subbulletPoints: `${lang.name}, : ${lang.proficiency}` }))} />
                    <h3 className="fontsize-large cvh3">Viktigt att veta!!</h3>
                    <p className="fontsize-normal cvp"> Juniorutvecklares CV ska helst vara MAX 1 sida lång!
                    </p>
                    
                </div>
           </section>
    )
}