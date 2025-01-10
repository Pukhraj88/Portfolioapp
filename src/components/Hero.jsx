import "./hero.css";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
export const Hero=()=>{


    return(
        <>
        <div className="container">
            <div className="hero-section">
            <div className="col8">
                <h2 className="name-yourself">Pukhraj Nemiwal</h2>
                <h5>Iam a fullstack developer</h5>
                <p>My name is Pukhraj Nemiwal , i belongs to Raghunathgarh(sikar).
                    Iam student of BCA finial year , my iam is to leadiing a IT complany.
                    I can learn from senior developer or work together and follow it trends and technology.
                </p>
                     <ul className="icons">
                     <li> <button className="cv-btn"><a href="Pukhrajresume.pdf" download>Download CV</a></button></li>
                        <li><a href="mailto:pukhrajnemiwal9@gmail.com" target="_blank" rel="noopener noreferrer"><span><AiOutlineMail/></span></a></li>
                        <li><a href="https://wa.me/username" target="_blank" rel="noopener noreferrer"><span><FaWhatsapp/></span></a></li>
                        <li><a href="https://t.me/@Pukhraj0012" target="_blank" rel="noopener noreferrer"><span><FaTelegram/></span></a></li>
                        <li><a href="https://github.com/Pukhraj88" target="_blank" rel="noopener noreferrer"><span><FaGithub/></span></a></li>
                     </ul>
            </div>

            <div className="col4">
                <img src="" alt="" />
            </div>
            </div>
        </div>
        </>
    );
}