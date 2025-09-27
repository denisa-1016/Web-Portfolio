import Navbar from "@/app/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import profilePic from "./Poza.png";
import Footer from "@/app/components/Footer";

export default function Home(){
    return (
        <main>
            <Navbar></Navbar>
            <section id="home" className={styles.container}>
                <div className={styles.left}>
                    <h1>Hi There! I'm Denisa</h1>
                    <h1>Welcome to my website!</h1>
                    <p>I'm a tech passionate! I love working with modern technologies Next.js and creating projects.</p>
                </div>

                <div className={styles.right}>
                    <Image src={profilePic} alt="Thats me!"></Image>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}