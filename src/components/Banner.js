import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/compimg.png";
import { ArrowRightCircle} from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ " Full Stack Developer","Web Developer","UI/UX Designer"];
  const period = 50;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex +1);
    }
  }
  
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <div>
                  <h1>Hi I'm Naveen Nakka</h1>
                  <h1>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack","Web Developer","UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                </div>
                  <p>Passionate Software Engineer and Technology Enthusiast with expertise in software development and web technologies. A Full Stack Developer dedicated to building scalable, innovative solutions that seamlessly connect user needs with cutting-edge technology. Strong proficiency in programming languages, frameworks, and modern development tools, with a commitment to continuous learning and staying ahead of industry trends.

An aspiring leader focused on technology-driven solutions and fostering collaborative, high-performance development environments. With a solid foundation in computer science, data structures, and system design, I am deeply passionate about problem-solving and crafting impactful digital experiences.

Let’s connect and shape the future through innovation and technology-driven advancements! 🚀</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
