import React from "react";
import "./about.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


export default function About() {
    return (
        <main>
            <Navbar></Navbar>

            <div className="container">
                <div className="section left">
                    <div className="text">
                        <h2>Cum am inceput:</h2>
                        <p>ndjkxnjckvarebjscBDbuwefhjscbdyhgbfyuakwah</p>
                    </div>
                    <div className="image">
                        <img src="/img.png"/>
                    </div>
                </div>

                <div className="section right">
                    <div className="text">
                        <h2>Cum am inceput:</h2>
                        <p>ndjkxnjckvarebjscBDbuwefhjscbdyhgbfyuakwah</p>
                    </div>
                    <div className="image">
                        <img src="/img.png"/>
                    </div>
                </div>

                <div className="section left">
                    <div className="text">
                        <h2>Cum am inceput:</h2>
                        <p>ndjkxnjckvarebjscBDbuwefhjscbdyhgbfyuakwah</p>
                    </div>
                    <div className="image">
                        <img src="/img.png"/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
);
}
