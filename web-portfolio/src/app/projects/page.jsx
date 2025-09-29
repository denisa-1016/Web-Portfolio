import React from "react";
import "./projects.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
export default function Projects(){
    return (
        <main>
            <Navbar></Navbar>
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="projects-grid">
                    <div className="project-card">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="" alt="Project 1"></img>
                            <h3>Project 1</h3>
                            <p>asbjkfhszlidghvlisendilnjkrvd</p>
                        </a>
                    </div>

                    <div className="project-card">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="" alt="Project 2"></img>
                            <h3>Project 2</h3>
                            <p>asbjkfhszlidghvlisendilnjkrvd</p>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}
