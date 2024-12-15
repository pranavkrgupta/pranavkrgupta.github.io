export default function Education() {
  const educationData = [
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
    <section aria-labelledby="education-section" className="mx-4 my-6">
      {/* Section Header */}
      <header>
        <h1
          id="education"
          className="text-center text-yellow-400 font-bold text-4xl my-6"
        >
          Education
        </h1>
      </header>
      <div className="flex flex-wrap gap-6 justify-center">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl shadow-lg p-6 w-full md:w-4/12"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-black text-yellow-500 text-sm font-bold rounded-full px-3 py-1">
                {edu.yearRange}
              </span>
              <span className="bg-yellow-100 text-black text-sm font-bold rounded-full px-3 py-1">
                {edu.type}
              </span>
            </div>

            <div className="flex justify-start gap-3 mb-4">
              <span className="bg-white rounded-full text-sm text-black font-bold px-4 py-1">
                {edu.degreeType}
              </span>
              <span className="bg-white rounded-full text-sm text-black font-bold px-4 py-1">
                {edu.degree}
              </span>
            </div>

            <div className="text-left">
              <h2 className="font-extrabold text-2xl text-black mb-2">
                {edu.title}
              </h2>
              <p className="text-gray-800 text-sm font-semibold mb-2">
                {edu.university}
              </p>
              <p className="text-gray-800 text-sm font-semibold">
                {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
