import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";

export const Skills = () => {
  return (
    <>
      <div className="container">
        <h1 className="title-skill">
          My <span>Skills</span>
        </h1>

        <div className="skills">

          {/* div technical skills */}
          <div className="col-6">
            <h1>Technical Skills</h1>

            <div>
                <ul className="colored-box">
                    <li><FaHtml5/></li>
                    <li><p>HTML</p></li>
                    <li><p className="half-colored-line" style={
                        {background: 'linear-gradient(to right, rgb(30, 174, 231) 95%, black 95%)'}
                        }></p></li>
                </ul>
                <ul className="colored-box">
                    <li><FaCss3Alt/></li>
                    <li><p>CSS</p></li>
                    <li><p className="half-colored-line" style={
                        {background: 'linear-gradient(to right, rgb(30, 174, 231) 85%, black 85%)'}
                        }></p></li>
                </ul>
                <ul className="colored-box">
                    <li><TbBrandJavascript/></li>
                    <li><p>JAVASRIPT</p></li>
                    <li><p className="half-colored-line" style={
                        {background: 'linear-gradient(to right, rgb(30, 174, 231) 89%, black 89%)'}
                        }></p></li>
                </ul>
                <ul className="colored-box">
                    <li><FaReact/></li>
                    <li><p>REACT</p></li>
                    <li><p className="half-colored-line" style={
                        {background: 'linear-gradient(to right, rgb(30, 174, 231) 78%, black 78%)'}
                        }></p></li>
                </ul>
                <ul className="colored-box">
                    <li><FaNodeJs/></li>
                    <li><p>NODEJS</p></li>
                    <li><p className="half-colored-line" style={
                        {background: 'linear-gradient(to right, rgb(30, 174, 231) 65%, black 65%)'}
                        }></p></li>
                </ul>
                <ul className="colored-box">
                    <li><FaBootstrap/></li>
                    <li><p>BOOTSTRAP</p></li>
                    <li><p className="half-colored-line" style={
                        {background: 'linear-gradient(to right, rgb(30, 174, 231) 95%, black 95%)'}
                        }></p></li>
                </ul>
            </div>


          </div>

          {/* div professional skills */}
          <div className="col-6">
            <h1>Professional Skills</h1>

{/* first circle */}
<div>
<div className="circle-container">
    <div className="radial-bars">
        <svg x="0px" y="0px" viewBox="0 0 170 140">
            <circle className="progress-bar radius"></circle>
            <circle className="path path-1 radius"></circle>
        </svg>
        <div className="percentage">69%</div>
        <div className="professionalskill">Creativity</div>
    </div>
    
    {/* second circle */}
    <div className="radial-bars">
        <svg x="0px" y="0px" viewBox="0 0 170 140">
            <circle className="progress-bar radius1"></circle>
            <circle className="path path-2 radius1"></circle>
        </svg>
            <div className="percentage">78%</div>
        <div className="professionalskill">Communication</div>
        
    </div>
</div>

{/* third circle */}
<div className="circle-container">
    <div className="radial-bars">
        <svg x="0px" y="0px" viewBox="0 0 170 140">
            <circle className="progress-bar radius"></circle>
            <circle className="path path-3 radius"></circle>
        </svg>
        <div className="percentage">86%</div>
        <div className="professionalskill">Problem Solving</div>
    </div>
    
    {/* fourth circle */}
    <div className="radial-bars">
        <svg x="0px" y="0px" viewBox="0 0 170 140">
            <circle className="progress-bar radius1"></circle>
            <circle className="path path-4 radius1"></circle>
        </svg>
        <div className="percentage">55%</div>
        <div className="professionalskill">Teamwork</div>
    </div>
    </div>
</div>




            </div>



        </div>


      </div>
    </>
  );
};

