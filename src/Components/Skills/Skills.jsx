const Skills = () => {
  return (
    <div className="bg-transparent pb-40 pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          MY <span className="text-green-900">SKILLS</span>
        </h1>
      </div>
      <div>
        <div className=" p-10 mt-10 rounded-md w-full md:w-3/4 mx-auto bg-[#191919] shadow-lg">
          <div className="md:flex gap-20 space-y-10 md:space-y-0">
            <div className="flex flex-col gap-2 flex-1">
              <span>HTML</span>
              <progress
                className="progress progress-success w-full mb-5"
                value="90"
                max="100"
              ></progress>
              <span>CSS</span>
              <progress
                className="progress progress-success w-full mb-5"
                value="70"
                max="100"
              ></progress>
              <span>JS</span>
              <progress
                className="progress progress-success w-full mb-5"
                value="85"
                max="100"
              ></progress>
              <span>REACT</span>
              <progress
                className="progress progress-success w-full"
                value="90"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <span>NODE.JS</span>
              <progress
                className="progress progress-success w-full mb-5"
                value="75"
                max="100"
              ></progress>
              <span>MONGODB</span>
              <progress
                className="progress progress-success w-full mb-5"
                value="60"
                max="100"
              ></progress>
              <span>C</span>
              <progress
                className="progress progress-success w-full mb-5"
                value="40"
                max="100"
              ></progress>
              <span>TAILWIND</span>
              <progress
                className="progress progress-success w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
