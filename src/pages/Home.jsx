import logo from "../logo.svg";
import "../styles/home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="leftHome">
          <p className="aboutHero">
            React (also known as React. js or ReactJS) is a free and open-source
            front-end JavaScript library for building user interfaces based on
            UI components. It is maintained by Meta (formerly Facebook) and a
            community of individual developers and companies.... Want to learn
            more about ReactJs...
          </p>
          <br />
          <motion.a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="reactLink"
            initial={{
              y1: "100%",
              opacity: 0,
            }}
            whileInView={{
              y1: "0%",
              opacity: 1,
            }}
            transition={{
              delay: "0.4",
            }}
          >
            Learn More
          </motion.a>
        </div>
        <div className="rightHome">
          <motion.img
            src={logo}
            alt="Logo"
            className="logoReact"
            initial={{
              x: "100%",
              opacity: 0,
            }}
            whileInView={{
              x: "0%",
              opacity: 1,
            }}
            transition={{
              delay: "0.2",
            }}
          />
        </div>
      </div>
      <hr />
      <section className="whyPage">
        <h1 className="heroText">
          Why I <span>Made This</span>
        </h1>
        <p className="answer">
          Many people were only watching the tutorial and not doing any projects
          after watching a video. This is also called tutorial hell, many
          beginners fall into this. So, It is a project website (Beginner
          friendly). You can try this projects to master ReactJS. Keep hustling.
        </p>
      </section>
    </>
  );
};

export default Home;
