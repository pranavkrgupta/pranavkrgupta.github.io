export default function Education() {
  const educationData = [
    {
      yearRange: "2015 - 2017",
      degreeType: "Higher Secondary Education",
      degree: "Class 12",
      title: "Science (PCM)",
      university: "DAV Public School",
      location: "Jamshedpur, Jharkhand, India",
      type: "Intermediate",
    },
    {
      yearRange: "2018 - 2022",
      degreeType: "Bachelor's Degree",
      degree: "B.E",
      title: "Computer Science & Engineering",
      university: "Chitkara University",
      location: "Rajpura, Punjab, India",
      type: "Graduation",
    },
  ];

  return (
    <section
      aria-labelledby="education-section"
      className="mx-4 my-6 md:w-8/12 place-self-center"
    >
      {/* Section Header */}
      <header>
        <h1
          id="education-section"
          className="text-center text-yellow-400 font-bold text-4xl my-6"
        >
          Education
        </h1>
      </header>

      <div className="flex flex-wrap gap-4 justify-center">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl shadow-lg p-6 w-full md:w-[48%]"
          >
            {/* Header with Year and Type */}
            <div className="flex items-center justify-between mb-4">
              <span
                aria-label="Year Range"
                className="bg-black text-amber-400 text-xs font-bold rounded-full px-3 py-1"
              >
                {edu.yearRange}
              </span>
              <span
                aria-label="Education Type"
                className="bg-amber-300 text-black text-xs font-bold rounded-full px-3 py-1"
              >
                {edu.type}
              </span>
            </div>

            {/* Degree Information */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white rounded-full text-xs text-black font-bold px-3 py-1">
                {edu.degreeType}
              </span>
              <span className="bg-white rounded-full text-xs text-black font-bold px-3 py-1">
                {edu.degree}
              </span>
            </div>

            {/* Details Section */}
            <div className="text-left">
              <h2 className="font-extrabold text-lg text-black mb-2">
                {edu.title}
              </h2>
              <p className="text-gray-800 text-sm font-medium mb-1">
                {edu.university}
              </p>
              <p className="text-gray-600 text-sm">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
