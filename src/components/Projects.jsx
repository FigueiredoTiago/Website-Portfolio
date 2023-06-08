import {
  Col,
  Container,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import projImg1 from "../assets/img/hydra.png";
import projImg2 from "../assets/img/dogs.png";
import projImg3 from "../assets/img/bikers.png";
import projImg4 from "../assets/img/batman.png";
import projImg5 from "../assets/img/canada.png";
import projImg6 from "../assets/img/spider.png";
import projImg7 from "../assets/img/fintech.png";
import projImg8 from "../assets/img/movie.png";
import projImg9 from "../assets/img/tempo.png";
import projImg10 from "../assets/img/portfolio.png";
import projImg11 from "../assets/img/login.png";
import projImg12 from "../assets/img/tenis.png";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Hydra Landing Page",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Social Media Dogs",
      description: "Development",
      imgUrl: projImg2,
    },
    {
      title: "Bikers Shop",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Batman Landing Page",
      description: "Development",
      imgUrl: projImg4,
    },
    {
      title: "Canada Website",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "SpiderMan Multverse",
      description: "Development",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Fintech Startup",
      description: "Development",
      imgUrl: projImg7,
    },
    {
      title: "Movies Lib",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Wether App PWA",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "WebSite Portfolio",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Login Page",
      description: "Development",
      imgUrl: projImg11,
    },
    {
      title: "Nike Landing Page",
      description: "Development",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Alguns de Meus Projetos Pessoais, Todos estão no meu GitHub, caso
              queira ver mais detalhes, basta clicar no botão do GitHub na
              NavBar.
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard {...project} key={index} />
                    ))}
                  </Row>
                </TabPane>
              </TabContent>
              <TabContent>
                <TabPane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => (
                      <ProjectCard {...project} key={index} />
                    ))}
                  </Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;
