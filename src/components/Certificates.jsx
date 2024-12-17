export default function Certificates() {
  const certificatesData = [
    {
      id: 1,
      platform: "Coursera",
      tutor: "Meta",
      title: "React Basics",
      fileLink:
        "https://www.coursera.org/account/accomplishments/certificate/99PRY89C4CVA",
      tags: [
        "Javascript",
        "React(Web Framework)",
        "Front-End Web development",
        "Web development",
      ],
    },
    {
      id: 2,
      platform: "Coursera",
      tutor: "IBM",
      title: "Developing Back-End Apps with Node.js and Express",
      fileLink:
        "https://www.coursera.org/account/accomplishments/certificate/UXXT6H5L3W4W",
      tags: [
        "Server-side JavaScript",
        "Back-End Development",
        "Web Development",
        "express",
      ],
    },
    {
      id: 3,
      platform: "Coursera",
      tutor: "Meta",
      title: "Programming with Javascript",
      fileLink:
        "https://www.coursera.org/account/accomplishments/certificate/32RC6WB5UT5U",
      tags: [
        "Test-Driven Development",
        "JavaScript",
        "Front-End Web Development",
        "Object-Oriented Programming(OOP)",
      ],
    },
    {
      id: 4,
      platform: "Coursera",
      tutor: "Meta",
      title: "Version Control",
      fileLink:
        "https://www.coursera.org/account/accomplishments/certificate/UQSTGFKRKYDC",
      tags: [
        "Version Control",
        "Github",
        "Bash (Unix Shell)",
        "Web Development",
        "Linux",
      ],
    },
    {
      id: 5,
      platform: "Coursera",
      tutor: "Meta",
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      fileLink:
        "https://www.coursera.org/account/accomplishments/certificate/K2KVG3WA83FU",
      tags: [
        "Bootstrap (Front-End Framework)",
        "Node.js",
        "Jquery",
        "SASS (Stylesheet Language)",
      ],
    },
  ];
  return (
    <section
      aria-labelledby="certificates-section"
      className="mx-4 my-6 md:w-8/12 place-self-center"
    >
      {/* Section Header */}
      <header>
        <h1
          id="certificates-section"
          className="text-center text-yellow-400 font-bold text-4xl my-6"
        >
          Certificates
        </h1>
      </header>

      {/* body */}
      {/* Certificates-grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {certificatesData.map((certificate) => (
          <div
            key={certificate.id}
            className=" bg-gray-50 text-black text-left rounded-xl shadow-lg p-6 md:w-[48%] w-full flex flex-col gap-2"
          >
            <div className="text-amber-400 text-sm font-bold bg-black rounded-full px-4 py-2 w-fit">
              {certificate.platform}
            </div>
            <div>
              <h2 className="text-gray-700 font-bold text-xl">
                {certificate.title}
              </h2>
            </div>

            <button className="text-left bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1.5 text-xs w-fit font-semibold border-black border-[1px]">
              <a
                href={certificate.fileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
