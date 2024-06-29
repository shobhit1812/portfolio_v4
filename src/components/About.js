const About = () => {
  const name = "Shobhit Nautiyal";
  return (
    <>
      <div className="p-5 font-poppins flex justify-between items-center mx-auto max-w-screen-xl px-6 md:px-16 lg:px-36">
        <div>
          <div className="py-2">
            <h1 className="text-8xl lg:text-8xl">Hi.</h1>
          </div>
          <div className="py-2">
            <h1>
              <span className="text-8xl lg:text-8xl">I'm</span>{" "}
            </h1>
          </div>
          <div className="py-2">
            <h1>
              <span className="text-8xl lg:text-8xl">
                {name.split("").map((char, index) => (
                  <span
                    key={index}
                    className={`font-extrabold inline-block opacity-0 animate-typewriter`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-7xl lg:text-8xl">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </span>
                ))}
              </span>
            </h1>
          </div>
          <div className="py-6">
            <h1 className="m-1 p-1 text-5xl">
              <span className="underline">coding instructor</span> &{" "}
              <span className="underline">mentor</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="p-5 font-poppins flex justify-between items-center mx-auto max-w-screen-xl px-6 md:px-16 lg:px-36">
        <p className="m-1 p-1 text-base text-balance">
          With a passion for teaching and a knack for making complex concepts
          accessible, I help students not only learn to code but also develop
          the logical thinking skills necessary to succeed. I’m committed to
          mentoring students who face challenges in their coding journey,
          guiding them towards mastery and confidence in their abilities.
        </p>
      </div>
    </>
  );
};

export default About;
