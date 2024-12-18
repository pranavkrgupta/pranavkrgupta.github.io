export default function Skills() {
  const technologiesData = [
    { link: "src/assets/html-5.png", name: "Html5" },
    { link: "src/assets/css-3.png", name: "CSS3" },
    { link: "src/assets/java-script.png", name: "JavaScript" },
    { link: "src/assets/social.png", name: "JQuery" },
    { link: "src/assets/bootstrap.png", name: "Bootstrap" },
    { link: "src/assets/science.png", name: "ReactJS" },
    { link: "src/assets/tailwindcss-mark.svg", name: "Tailwind CSS" },
    { link: "src/assets/ant-design.png", name: "Ant Design" },
    { link: "src/assets/git.png", name: "Git" },
    { link: "src/assets/nodejs.png", name: "NodeJS" },
    { link: "src/assets/mongodb.png", name: "MongoDB" },
    { link: "src/assets/express.png", name: "express.js" },
    { link: "src/assets/mysql.png", name: "MySQL" },
  ];

  return (
    <section
      aria-labelledby="skills-section"
      className="mx-4 my-6 md:w-8/12 place-self-center"
    >
      {/* Section Header */}
      <header>
        <h1
          id="skills-section"
          className="text-center text-yellow-400 font-bold text-4xl my-6"
        >
          Skills
        </h1>
      </header>

      {/* Technologies Grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {technologiesData.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-200 text-black rounded-full pr-4 text-sm font-bold"
          >
            {/* Fixed Sized Icon Container */}
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <img
                src={tech.link}
                alt={tech}
                className="w-6 h-6 object-contain rounded-full "
              />
            </div>
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  );
}
