import React from "react";
import '../assets/styles/Project.scss'; // Reuse the same styles as the Project component
import finbot from '../assets/images/finbot.png';
import applefest from '../assets/images/applefest.png';
import biopage from '../assets/images/biopage.png';

function SchoolProjects() {
    return (
        <div className="projects-container" id="school-projects">
            <h1>School Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://alexshi7.github.io/group-project/" target="_blank" rel="noreferrer"><img src={finbot} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://alexshi7.github.io/group-project/" target="_blank" rel="noreferrer"><h2>FinBot Webpage</h2></a>
                    <p>JS, HTML, CSS. Group project and comissioned work for the Cornell FinTech Club's newest product, FinBot.</p>
                </div>
                <div className="project">
                    <a href="https://alexshi7.github.io/apple-fest/" target="_blank" rel="noreferrer"><img src={applefest} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://alexshi7.github.io/apple-fest/" target="_blank" rel="noreferrer"><h2>AppleFest Competition</h2></a>
                    <p>JS, HTML, CSS. Website mockup for the Ithaca AppleFest. Submitted for potential judging.</p>
                </div>
                <div className="project">
                    <a href="https://alexshi7.github.io/biopage/" target="_blank" rel="noreferrer"><img src={biopage} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://alexshi7.github.io/biopage/" target="_blank" rel="noreferrer"><h2>Ithaca Blog</h2></a>
                    <p>HTML, CSS. Personal Ithaca blog for Friends & Family.</p>
                </div>

                {/* Add more school projects here */}
            </div>
        </div>
    );
}

export default SchoolProjects;