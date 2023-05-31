import { Col } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
