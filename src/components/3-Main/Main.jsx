import React, { useState } from "react";
import "./Main.css";
import myProjects from "../Json/MyProject.js";

function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const filterProjects = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setArr(myProjects);
    } else {
      setArr(myProjects.filter((item) => item.category === category));
    }
  };

  const getButtonClass = (category) =>
    currentActive === category ? "active" : "";

  return (
    <main className="flex">
      <section id="projects" className="left-section flex">
        <button
          onClick={() => filterProjects("all")}
          className={getButtonClass("all")}
          aria-pressed={currentActive === "all"}
        >
          All Projects
        </button>
        <button
          onClick={() => filterProjects("css")}
          className={getButtonClass("css")}
          aria-pressed={currentActive === "css"}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => filterProjects("javascript")}
          className={getButtonClass("javascript")}
          aria-pressed={currentActive === "javascript"}
        >
          JavaScript
        </button>
        <button
          onClick={() => filterProjects("react")}
          className={getButtonClass("react")}
          aria-pressed={currentActive === "react"}
        >
          React.js
        </button>
        <button
          onClick={() => filterProjects("vue")}
          className={getButtonClass("vue")}
          aria-pressed={currentActive === "vue"}
        >
          Vue.js
        </button>
      </section>

      <section className="right-section flex">
        {arr.map((item) => (
          <article className="card" key={item.id}>
            <img
              style={{ width: "266px" }}
              src={item.imagePath}
              alt="Project"
            />
            <div className="box" style={{ width: "266px" }}>
              <h2 className="title">{item.projectTitle}</h2>
              <p className="sub-title">
                {item.text ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam eius, maiores doloremque, quod dignissimos tenetur."}
              </p>
              <div className="flex icons">
                <div className="flex" style={{ gap: "11px" }}>
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-github"
                  ></a>
                </div>
                <a
                  className="link flex"
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <span className="icon-arrow-right" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Main;
