import ProjectItems from "../components/ProjectItems";
import counterImg from "../Assests/Counter.png";
import accordionImg from "../Assests/accordion.png";
import profileApp from "../Assests/profileApp.png";
import randomJokeImg from "../Assests/jokeApp.png";
import todoImg from "../Assests/todo.png";
import weatherImg from "../Assests/weather.png";
import calculatorImg from "../Assests/calculator.png";
import clockImg from "../Assests/clock.png";
import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Counter",
      path: "/projects/counter",
      img: counterImg,
      altImg: "counter",
      description:
        "This is a counter app , that have three buttons i.e Clear ,Incremenet and Decrement",
    },
    {
      name: "Accordion",
      path: "/projects/accordion",
      img: accordionImg,
      altImg: "accordion",
      description:
        "Accordion ,An accordion is used to show (and hide) HTML content.",
    },
    {
      name: "ProfileApp",
      path: "/projects/profileapp",
      img: profileApp,
      altImg: "profileList",
      description:
        "Simple Profile App , Show some profiles and search function",
    },
    {
      name: "Random Joke",
      path: "/projects/randomjoke",
      img: randomJokeImg,
      altImg: "randomeJoke",
      description: "Random Joke, Creates a random joke.",
    },
    {
      name: "TODO",
      path: "/projects/todo",
      img: todoImg,
      altImg: "todo",
      description: "TODO, Create, Update & Delete your tasks",
    },
    {
      name: "WeatherApp",
      path: "/projects/weather",
      img: weatherImg,
      altImg: "weather",
      description: "Weather, Check your city's weather",
    },
    {
      name: "Calculator",
      path: "/projects/calculator",
      img: calculatorImg,
      altImg: "calculator",
      description: "Calculator, Do your math works",
    },
    {
      name: "Clock",
      path: "/projects/clock",
      img: clockImg,
      altImg: "clock",
      description: "Clock, Watch the time",
    },
  ];

  return (
    <>
      <div className="containerProjects">
        {projects.map((project, index) => {
          return (
            <ProjectItems
              name={project.name}
              path={project.path}
              img={project.img}
              description={project.description}
              key={index}
              altImg={project.altImg}
            />
          );
        })}
      </div>
    </>
  );
};
export default Projects;
