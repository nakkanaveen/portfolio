import java from "../assets/img/java.png";
import python from "../assets/img/python.jpg";
import C from "../assets/img/C.jpg";
import R from "../assets/img/R.png";
import MySQL from "../assets/img/MySql.png";
import IOT from "../assets/img/IOT.png";
import Flutter from "../assets/img/Flutter.png";
import Dart from "../assets/img/Dart.jpg";
import Oracle from "../assets/img/Oracle.png";
import AWS from "../assets/img/AWS.jpg";
import Html from "../assets/img/Html.png";
import Css from "../assets/img/Css.png";
import JS from "../assets/img/JS.png";
import ReacT from "../assets/img/ReacT.png";
import Nodej from "../assets/img/Nodej.png";
import Postman from "../assets/img/Postman.png";
import Golang from "../assets/img/Golang.png";
import rest from "../assets/img/rest.png";
import boot from "../assets/img/boot.png";
import json from "../assets/img/json.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="containerss">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a comprehensive command over front-end and back-end technologies,<br></br> I'm a Full Stack Developer adept at crafting robust, scalable solutions,<br></br> enhancing user interactions through innovative design and seamless functionality.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
                                <img src={java} alt="Image" className="hoverable_image" />
                                </a>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                            <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer">
                                <img src={python} alt="Image" />
                                </a>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
                                <img src={MySQL} alt="Image" />
                                </a>
                                <h5>MySQL</h5>
                           </div>
                            <div className="item">
                                <img src={C} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={R} alt="Image" />
                                <h5>R</h5>
                            </div>
                            <div className="item">
                                <img src={IOT} alt="Image" />
                                <h5>IOT</h5>
                            </div>
                            <div className="item">
                                <img src={Dart} alt="Image" />
                                <h5>Dart</h5>
                            </div>
                            <div className="item">
                                <img src={Flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={Oracle} alt="Image" />
                                <h5>Oracle</h5>
                            </div>
                            <div className="item">
                                <img src={AWS} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={Html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JS} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={ReacT} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Nodej} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={Postman} alt="Image" />
                                <h5>PostMan</h5>
                            </div>                    
                            <div className="item">
                                <img src={Golang} alt="Image" />
                                <h5>GoLang</h5>
                            </div>
                            <div className="item">
                                <img src={boot} alt="Image" />
                                <h5>SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src={rest} alt="Image" />
                                <h5>Rest</h5>
                            </div>
                            <div className="item">
                                <img src={json} alt="Image" />
                                <h5>Json</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    
        <img className="background-image-left" src={colorSharp} alt="Image" />
        <div class="main">
            <h3 class="head">Experience</h3>
            <div class="container">
                <ul className="expboxes">
                    <li>
                        <h3 class="heading">Software Engineer at UF</h3>
                        <p>Developing responsive web interfaces using ReactJS, HTML, and CSS to ensure seamless cross-device compatibility. Implementing TypeScript for enhanced type-checking, improving code reliability and maintainability. Utilizing JavaScript and JSON for efficient data processing and integration. Building and optimizing modular React components to enhance scalability, reusability, and UI architecture..</p>
                        <a href="https://drive.google.com/file/d/1kXRF2WXYB2x63VL-uFs8JyCHuaqMfybG/view?usp=sharing" target="_blank">Read More </a>
                        <span class="date">May 2024-Present</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">University of Florida</h3>
                        <p>I'm a Master's student at the University of Florida majoring in Computer and Information Sciences. My academic background, projects experience, dynamic and stimulating academic environment in this university fuels my motivation to keep pushing boundaries in my field. </p>
                        <a href="https://drive.google.com/file/d/1kXRF2WXYB2x63VL-uFs8JyCHuaqMfybG/view?usp=sharing" target="_blank">Read More </a>
                        <span class="date">Jan 2023-Dec 2024</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">Virtusa</h3>
                        <p>Software Engineer at Virtusa, I worked with a diverse tech stack, utilizing Spring Boot for backend development and React.js for frontend applications. Integrated MySQL for efficient database management and optimized RESTful APIs to improve system performance. Leveraged Jira Kanban for agile project tracking and implemented Git version control for maintainable and scalable code. Conducted system testing and UAT using Selenium and JUnit, reducing post-release issues and enhancing software quality. </p>
                        <a href="https://drive.google.com/file/d/1kXRF2WXYB2x63VL-uFs8JyCHuaqMfybG/view?usp=sharing" target="_blank">Read More </a>
                        <span class="date">Oct 2020-Nov 2022</span>
                        <span class="circle"></span>
                    </li>
                   
                </ul>
            </div>
        </div>
    </section>
  )
}
