const About = () => {
  return (
    <>
      <div className="p-5 font-poppins flex justify-between items-center mx-auto max-w-screen-xl px-6 md:px-16 lg:px-36">
        <div>
          <h1 className="m-1 p-1 text-8xl">Hi,</h1>
          <h1 className="m-1 p-1 text-8xl">
            I'm <span className="font-extrabold">Shobhit Nautiyal</span>.
          </h1>
          <h1 className="m-1 p-1 text-6xl">
            <span className="underline"> coding instructor</span> |{" "}
            <span className="underline"> mentor</span>
          </h1>
        </div>
      </div>
      <div className="p-5 font-poppins flex justify-between items-center mx-auto max-w-screen-xl px-6 md:px-16 lg:px-36">
        <p className="m-1 p-1 text-base text-center">
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
