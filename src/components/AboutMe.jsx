// LoveItem.js - Reusable Component
// eslint-disable-next-line react/prop-types
const LoveItem = ({ text }) => (
  <div className="bg-white text-black text-xs font-bold px-4 py-1 rounded-full shadow-md flex items-center gap-2">
    {text}
  </div>
);

// AboutMe.jsx
export default function AboutMe() {
  // Data-driven approach for love items
  const loveItems = [
    "Listening to music",
    "Traveling",
    "Calisthenics",
    "Money",
  ];

  return (
    <section
      aria-labelledby="about-me-section"
      className="mx-4 my-6 md:w-8/12 place-self-center"
    >
      {/* Section Header */}
      <header>
        <h1
          id="about-me-section"
          className="text-center text-yellow-400 font-bold text-4xl my-6"
        >
          About Me
        </h1>
      </header>

      {/* "I Love" Section */}
      <div className="my-3 w-1/2 pb-3">
        <h2
          className="text-yellow-400 text-2xl font-bold text-left pb-3"
          aria-labelledby="love-section"
        >
          I Love
        </h2>
        <div className="flex flex-wrap gap-3 justify-start" id="love-section">
          {loveItems.map((item, index) => (
            <LoveItem key={index} text={item} />
          ))}
        </div>
      </div>

      {/* About Text Section */}
      <div className="bg-gray-800 p-5 rounded-xl text-left text-white">
        <p>
          I’m <strong>Pranav Kumar Gupta</strong>, a web developer passionate
          about creating impactful and scalable web applications. My expertise
          lies in the <strong>MERN stack</strong> and modern front-end
          frameworks like <strong>React</strong> and{" "}
          <strong>TailwindCSS</strong>.
        </p>
      </div>
    </section>
  );
}
