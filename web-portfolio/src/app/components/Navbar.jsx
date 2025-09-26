"use client";
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import logo from "./logo.png";
import {useState} from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="navbar">
            <div className="logo">
                <Image src={logo} alt="logo"></Image>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {/* every span equals a line on the "hamburger" */}
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="navLinks">
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </nav>
    );
}