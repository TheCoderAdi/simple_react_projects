import profile from "../assets/profile.jpg";
import "../styles/about.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div className="aboutSection">
        <div className="creatorImg">
          <motion.img
            src={profile}
            alt="Profile"
            className="profileLogo"
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            whileInView={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              delay: "0.2",
            }}
          />
        </div>
        <motion.div
          className="iThink"
          initial={{
            y: "100%",
            opacity: 0,
          }}
          whileInView={{
            y: "0%",
            opacity: 1,
          }}
          transition={{
            delay: "0.4",
          }}
        >
          I am Aditya SwayamSiddha from Odisha. I am very passionate about
          coding and loves building stuff through programming.
        </motion.div>
      </div>
    </>
  );
};

export default About;
