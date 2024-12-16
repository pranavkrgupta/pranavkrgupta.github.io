export default function Experience() {
  const experienceData = [
    {
      company: "Zidio Development",
      location: "Online",
      positions: "Web Development Intern",
      duration: "APRIL 2024 - JULY 2024",
      responsibilities: [
        "Gained hands-on experience with the MERN stack (MongoDB, Express, React, Node.js), focusing on both frontend and backend development.",
        "Developed two projects independently as part of the MERN stack learning process:",
        "Enhanced skills in REST API design, database modeling, and client-server communication.",
        "Collaborated with teams to apply best practices in code structuring and version control using Git.",
        "Developed a customizable dropdown component using Storybook for efficient UI development and testing.",
      ],
    },
    {
      company: "Kunal i Technology",
      location: "Jamshedpur, Jharkhand, India",
      positions: "Web Development Intern",
      duration: "JAN 2022 - MAY 2022",
      responsibilities: [
        "Developed and optimized React.js features to enhance app performance and user experience.",
        "Collaborated with backend teams using Postman for data mocking, and integrated Node.js for server-side logic.",
        "Conducted code reviews and wrote unit tests with Jest.",
        "Resolved critical bugs, including complex race conditions, and refactored legacy code; enhanced code quality and maintainability, resulting in a 40% reduction in production issues and a 25% decrease in debugging time",
      ],
    },
  ];
  return (
    <section aria-labelledby="experience-section" className="mx-4 my-6">
      {/* Section Header */}
      <header>
        <h1
          id="experience"
          className="text-center text-amber-400 font-bold text-4xl my-6"
        >
          Experience
        </h1>
      </header>

      <div>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-xl p-6 mb-6 md:w-8/12 place-self-center"
          >
            {/* Company Info */}
            <div className="flex justify-between items-center">
              <div className="bg-black rounded-full px-4 py-2 text-left">
                <h3 className="text-amber-400 text-sm font-bold ">
                  {exp.company}
                </h3>
                <p className="text-gray-50 text-xs">{exp.location}</p>
              </div>
              <p className="bg-amber-300 rounded-full text-xs font-semibold px-3 py-1 text-black">
                {exp.duration}
              </p>
            </div>

            {/* Position */}
            <h4 className="text-gray-700 text-left text-lg font-bold py-4">
              {exp.positions}
            </h4>

            {/* Responsibilities */}
            <ul className="list-disc pl-6 text-gray-600 text-left text-xs space-y-2">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
