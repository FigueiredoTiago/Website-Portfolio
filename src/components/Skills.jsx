import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Hic debitis, accusamus quaerat perferendis quam, qui
                      numquam corporis minus maxime incidunt sunt iste atque a
                      quidem harum ipsa veniam. Optio, voluptate?
                    </p>
                    <Carousel
                      className="skill-slider"
                      responsive={responsive}
                      infinite={true}
                    >
                      <div className="item">
                        <img src={meter1} alt="skill image" />
                        <h5>Web Development</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="skill image" />
                        <h5>React</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="skill image" />
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="skill image" />
                        <h5>TypeScript</h5>
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
