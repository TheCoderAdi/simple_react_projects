import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { useState } from "react";
import logo from "../../Assests/logo.png";
import { AnimatePresence, motion } from "framer-motion";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/about",
    name: "About",
    icon: <FaUser />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <MdContacts />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <AiFillProject />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "50px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.img
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                  src={logo}
                />
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} className="bar-style" />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              return (
                <NavLink to={route.path} key={index} className="link">
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                        onClick={toggle}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
