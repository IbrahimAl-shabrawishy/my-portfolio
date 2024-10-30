import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../../public/animation/developer.json";
import { motion } from "framer-motion";
("");
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div id="about" className="parent-avatar flex">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 7 }}
            src="/images/a9b96478-adc2-49a6-9093-536d3de59b0c-modified.png"
            alt="Ibrahim Al-shabrawishy Image"
            className="avatar"
          />
          <div className="icon-verified" />
        </div>

        <h1 className="title">Frontend Developer</h1>
        <p className="sub-title">
          Hi, I’m Ibrahim Al-Shabrawishy, a front-end developer specializing in
          JavaScript and modern frameworks. With a strong foundation in
          front-end development, I focus on creating clean, user-friendly
          interfaces and responsive designs. I have hands-on experience with
          JavaScript and am currently advancing my skills in popular frameworks
          like Vue.js and React. My projects emphasize functionality,
          accessibility, and a seamless user experience.
        </p>

        <div className="all-icons flex">
          <a
            href="https://www.linkedin.com/in/ibrahim-al-shabrawishy-00a8331b8/"
            className="icon icon-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://github.com/IbrahimAl-shabrawishy"
            className="icon icon-github"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.instagram.com/eng_ibrahim_alshabrawishy/"
            className="icon icon-instagram"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://www.facebook.com/Ibrahim.alshabrawishy/"
            className="icon icon-facebook"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://wa.me/01004799817"
            className="icon icon-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          style={{ height: "500px", width: "500px" }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
export default Hero;
