import girlRun from "../../images/who-we-are/girl-run.png";
import girlRunRedBg from "../../images/who-we-are/girl-redbg.svg";
import titleBg from "../../images/pricing/titlebg.svg";
import equpments from "../../images/who-we-are/equpments.png";
import gym from "../../images/who-we-are/gym.png";
import weightlifter from "../../images/who-we-are/weightlifter.png";
import AboutSectionBackground from "../../images/who-we-are/background.jpg";

import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${AboutSectionBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="px-16 py-16 sm:px-12 w-full  flex items-center justify-center sm:justify-normal gap-5"
    >
      <div className="w-full sm:w-[50%] flex flex-col items-center sm:items-start gap-5 ">
        <div>
          <img src={titleBg} className="-z-10 sm:w-48" />
          <p className=" sm:w-64 ml-14 sm:ml-10 text-white text-sm relative z-10 font-bold -top-6">
            WHO WE ARE
          </p>
        </div>
        <h1 className="font-bold text-3xl text-center">
          Take Your Health And Body To Next Level
        </h1>
        <p className="text-gray-500 text-center sm:text-start">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className="w-full grid sm:grid-cols-12 gap-4 my-5 ">
          <div className="sm:col-span-4 flex flex-col items-center justify-center sm:border-r-2 p-4">
            <img src={weightlifter} alt="" className="w-12 " />
            <h1 className="font-bold text-center mt-2 sm:text-lg">
              {" "}
              PROFESSIONAL <br /> TRAINERS{" "}
            </h1>
          </div>
          <div className="sm:col-span-4 flex flex-col items-center justify-center sm:border-r-2 p-4">
            <img src={equpments} alt="" className="w-12 " />
            <h1 className="font-bold text-center mt-2 sm:text-lg">
              {" "}
              MODERN <br /> EQUIPMENTS{" "}
            </h1>
          </div>
          <div className="sm:col-span-4 flex flex-col items-center justify-center p-4">
            <img src={gym} alt="" className="w-12 " />
            <h1 className="font-bold text-center mt-2 sm:text-lg">
              {" "}
              FANCY GYM <br /> MACHINES{" "}
            </h1>
          </div>
        </div>

        <button className="py-3 px-9 font-medium text-lg border border-[#404040ff] bg-[#404040ff] text-white hover:border hover:border-[#404040ff] hover:bg-transparent hover:text-[#404040ff] hover:rounded-xl ease-in duration-150">
          <Link to="">Take A Tour</Link>
        </button>
      </div>

      <div
        className="hidden sm:w-[50%] sm:block"
        style={{
          backgroundImage: `url(${girlRunRedBg})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={girlRun} />
      </div>
    </div>
  );
}

export default AboutSection;
