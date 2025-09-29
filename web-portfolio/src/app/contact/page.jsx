import React from "react";
import "./contact.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Contact(){
    return (
        <main>
            <Navbar></Navbar>
            <div className="contact-container">
                <h1>Contact me</h1>
                <div className="contact-list">
                    <div className="contact-item">
                        <img src="" alt="Email"></img>
                        <a href="mailto:denisasoare1016@gmail.com">denisasoare1016@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <img src="" alt="LinkedIn"></img>
                        <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>

                    <div className="contact-item">
                        <img src="" alt="GitHub"></img>
                        <a href="https://github.com/denisa-1016" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}