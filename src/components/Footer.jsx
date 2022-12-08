import React from "react";
import "../styles/footer.css";
import { SiReplit } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <hr />
      <footer></footer>
      <footer className="foot">
        All Copyrights are reserved by &copy; ADITYA
        <div className="connect">
          <a
            href="https://replit.com/@ASwayamSiddhaCo"
            target="_blank"
            rel="noreferrer"
          >
            <SiReplit
              style={{ fontSize: "1.5rem", color: "white", padding: "0 1rem" }}
            />
          </a>
          <a
            href="https://github.com/TheCoderAdi"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub
              style={{ fontSize: "1.5rem", color: "white", padding: "0 1rem" }}
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
