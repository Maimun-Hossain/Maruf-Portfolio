import bg from "../../assets/bg-01.jpg";
import profile from "../../assets/1648238590919.jpg";
import Skills from "../Skills/Skills";
import Service from "../Service/Service";

import resume from '../../assets/resume_maruf.pdf'

const Banner = () => {
  return (
    <div className="min-h-screen" style={{ backgroundImage: `url('${bg}')` }}>
      <div className="md:flex py-20 md:py-36 justify-center items-center">
        <div className="flex-1">
          <img
          id="banner-img"
            className="shadow-2xl w-1/2 mx-auto"
            src={profile}
            alt=""
          />
        </div>
        <div className="flex-1 w-5/6 md:w-1/2 mx-auto mt-10">
          <h3 className="text-green-900 text-2xl md:text-4xl font-bold">
            HELLO I AM
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            MARUF
            <br />
            HOSSAIN
          </h1>
          <p className="my-5">
            I am a Front end web developer with a passion for coding.
            <br /> I envision myself evolving into a senior web developer in the
            coming years.
          </p>
          <div>
            <p className="font-bold text-white inline-block mr-5">
              FOLLOW ME ON:{" "}
            </p>
            <span className="inline-block">
              <a href="">
                <i className="fa-brands text-white hover:text-green-900 hover:border-green-900 fa-facebook-f border rounded-full py-3 px-4"></i>
              </a>
              <a href="">
                <i className="fa-brands text-white hover:text-green-900 hover:border-green-900 fa-whatsapp border rounded-full py-3 px-3 ml-2"></i>
              </a>
              <a href="">
                <i className="fa-brands text-white hover:text-green-900 hover:border-green-900 fa-instagram border rounded-full py-3 px-3 ml-2"></i>
              </a>
              <a href="">
                <i className="fa-brands text-white hover:text-green-900 hover:border-green-900 fa-github border rounded-full py-3 px-3 ml-2"></i>
              </a>
            </span>
          </div>
          <a href="mailto:maimun78l@gmail.com">
            <button className="btn mr-7 bg-[#005522] text-white rounded-md mt-5">
              SEND MESSAGE
            </button>
          </a>
          <a href={resume} download="resume">
            <button className="btn bg-[#005522] text-white rounded-md mt-5">
              RESUME DOWNLOAD
            </button>
          </a>
        </div>
      </div>
      <Skills></Skills>
      <Service></Service>
    </div>
  );
};

export default Banner;
