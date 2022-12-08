import { Link } from "react-router-dom";
import "../styles/projectitems.css";

const ProjectItems = ({ name, path, img, description, altImg }) => {
  return (
    <>
      <div className="cardView" style={{ margin: "auto" }}>
        <div className="card">
          <img src={img} alt={altImg} />
          <h1>{name}</h1>
          <p>{description}</p>
          <Link to={path}>
            <button className="myBtn">Check Here</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItems;
