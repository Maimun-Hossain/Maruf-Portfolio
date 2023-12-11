import bg from "../../assets/bg-01.jpg";
import profile from "../../assets/1648238590919.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="w-3/4 my-0 md:my-20 mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-green-900 mb-5">
            Who am i?
          </h3>
          <h1 className="text-4xl font-bold text-white mb-7">
            I am Maruf Hossain
          </h1>
          <p className="mb-7">
            I am a Front end web developer with a passion for coding. I envision
            myself evolving into a senior web developer in the coming years.
          </p>
          <div className="divider divider-success"></div>
          <div className="flex justify-between flex-col md:flex-row mb-10">
            <div>
              <h3 className="mb-2 text-white">
                First Name: <span className="text-gray-400">Maruf</span>
              </h3>
              <h3 className="mb-2 text-white">
                Email:{" "}
                <a
                  href="mailto:maimun78l@gmail.com"
                  className="link text-green-900 hover:no-underline"
                >
                  maimun78l@gmail.com
                </a>
              </h3>
              <h3 className="mb-2 text-white">
                Username: <span className="text-gray-400">Maruf318</span>
              </h3>
              <h3 className="text-white">
                Age: <span className="text-gray-400">18 Years+</span>
              </h3>
            </div>
            <div>
              <h3 className="mb-2 text-white">
                Last Name: <span className="text-gray-400">Hossain</span>
              </h3>
              <h3 className="mb-2 text-white">
                Phone:{" "}
                <a
                  href="tel:+8801703386612"
                  className="link text-green-900 hover:no-underline"
                >
                  +880 17033 86612
                </a>
              </h3>
              <h3 className="mb-2 text-white">
                Language:{" "}
                <span className="text-gray-400">English, Bangla (Native)</span>
              </h3>
              <h3 className="text-white">
                Address:{" "}
                <span className="text-gray-400">Magdeburg, Germany</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2  my-10 md:my-0">
          <img
            className="w-2/3 mx-auto shadow-2xl p-2 md:p-5 bg-[#1a1a1a] rounded-lg border-8 border-[#1a1a1a]"
            src={profile}
            alt=""
          />
        </div>
      </div>
      <div className="text-center pb-10">
        <h1 className="text-5xl font-bold text-white">
          MY <span className="text-green-900">EDUCATION</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-11/12 md:w-3/5 mx-auto pb-10">
        <div className="w-full">
          <div className="card bg-[#191919] rounded-md">
            <div className="card-body p-5">
              <h1 className="text-white font-bold">EDUCATION</h1>
            </div>
          </div>
          {/*  */}
          <div className="flex mt-5"> 
            <div>
            <i className="fa-solid fa-graduation-cap p-3 bg-green-900 rounded-full text-white mr-3"></i>
            </div>
            <div>
                <p className="mb-2">IBN Taimiya School / 2018 - 2020</p>
                <h1 className="text-lg font-bold mb-2 text-white">High School</h1>
                <p className="text-sm">www.itsc.edu.bd.com <br />Secondary School Certificate (SSC) <br />Subject: Science</p>
            </div>
          </div>
          <div className="flex mt-5"> 
            <div>
            <i className="fa-solid fa-graduation-cap p-3 bg-green-900 rounded-full text-white mr-3"></i>
            </div>
            <div>
                <p className="mb-2">IBN Taimiya School / 2018 - 2020</p>
                <h1 className="text-lg font-bold mb-2 text-white">High School</h1>
                <p className="text-sm">www.itsc.edu.bd.com <br />Secondary School Certificate (SSC) <br />Subject: Science</p>
            </div>
          </div>
          {/*  */}
        </div>

        <div className="w-full">
          <div className="card bg-[#191919] rounded-md shadow-xl">
            <div className="card-body p-5">
              <h1 className="text-white font-bold">EXPERIENCE</h1>
            </div>
          </div>
          {/*  */}
          <div className="flex mt-5"> 
            <div>
            <i className="fa-solid fa-briefcase p-3 bg-green-900 rounded-full text-white mr-3"></i>
            </div>
            <div>
                <p className="mb-2">Fiverr / 2021 - Present</p>
                <h1 className="text-lg font-bold mb-2 text-white">Freelance</h1>
                <p className="text-sm">Fiverr is a global online marketplace connecting freelancers with clients, offering a range of services and tools to manage projects and payments.</p>
            </div>
          </div>
          <div className="flex mt-5"> 
            <div>
            <i className="fa-solid fa-briefcase p-3 bg-green-900 rounded-full text-white mr-3"></i>
            </div>
            <div>
                <p className="mb-2">Fiverr / 2021 - Present</p>
                <h1 className="text-lg font-bold mb-2 text-white">Freelance</h1>
                <p className="text-sm">Fiverr is a global online marketplace connecting freelancers with clients, offering a range of services and tools to manage projects and payments.</p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default About;
