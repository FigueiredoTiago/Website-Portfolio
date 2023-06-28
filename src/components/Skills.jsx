import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";

import reactIcon from "../assets/img/reactIcon.svg";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import ts from "../assets/img/ts.png";
import sass from "../assets/img/sass.png";
import dev from "../assets/img/dev.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      Minhas Skills e Tecnologias que estou usando Atualmente, Caso queira saber um Pouco mais acesse meu perfil no Linkedin.
                    </p>
                    <Carousel
                      className="skill-slider"
                      responsive={responsive}
                      infinite={true}
                    >
                      <div className="item">
                        <img src={dev} alt="skill image" />
                        <h5>Web Development</h5>
                      </div>
                      <div className="item">
                        <img src={html} alt="skill image" />
                        <h5>HTML</h5>
                      </div>
                      <div className="item">
                        <img src={css} alt="skill image" />
                        <h5>CSS</h5>
                      </div>
                      <div className="item">
                        <img src={sass} alt="skill image" />
                        <h5>SASS</h5>
                      </div>
                      <div className="item">
                        <img src={reactIcon} alt="skill image" />
                        <h5>ReactJS</h5>
                      </div>
                      <div className="item">
                        <img src={js} alt="skill image" />
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                        <img src={ts} alt="skill image" />
                        <h5>TypeScript</h5>
                      </div>
                      <div className="item">
                        <img src={git} alt="skill image" />
                        <h5>GIT</h5>
                      </div>
                      <div className="item">
                        <img src={github} alt="skill image" />
                        <h5>GITHUB</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};

export default Skills;
