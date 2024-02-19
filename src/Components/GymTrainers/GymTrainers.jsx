import redBg from "../../images/trainers/trainer-bg.png";
import redTextBg from "../../images/who-we-are/title-bg.svg";
import shape from "../../images/trainers/shape.png";
import background from "../../images/trainers/bg-attachment.png";
import { IoIosArrowUp } from "react-icons/io";
import trainer1 from "../../images/trainers/trainer1.png";
import trainer2 from "../../images/trainers/trainer2.png";
import trainer3 from "../../images/trainers/trainer3.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { Link } from "react-router-dom";

function GymTrainers() {
  const trainers = [
    {
      id: 1,
      name: "John Lewis",
      type: "Yoga Trainer",
      avatar: trainer1,
      social: [
        {
          facebook: "",
          twitter: "",
          instagram: "",
          mail: "",
        },
      ],
    },
    {
      id: 2,
      name: "Jonathan Doe",
      type: "Crossfit Trainer",
      avatar: trainer2,
      social: [
        {
          facebook: "",
          twitter: "",
          instagram: "",
          mail: "",
        },
      ],
    },
    {
      id: 3,
      name: "Ana June",
      type: "Personal Trainer",
      avatar: trainer3,
      social: [
        {
          facebook: "",
          twitter: "",
          instagram: "",
          mail: "",
        },
      ],
    },
  ];

  return (
    <div
      className="px-16 sm:px-16 py-16 pb-24 w-full W flex flex-col items-center gap-y-8 "
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${redTextBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-56 text-center font-bold text-white py-1 "
      >
        GYM TRAINERS
      </div>
      <h1 className="font-bold text-2xl sm:text-3xl">Team Of Expert Coaches</h1>
      <p className="text-gray-400 text-sm sm:text-lg leading-none text-center mb-5">
        Expert team of coaches helps you succeed in any goal, <br />{" "}
        personalized guidance and motivation provided!
      </p>

      <div className="w-full grid sm:grid-cols-12 gap-10">
        {trainers.map((trainer) => {
          return (
            <div
              key={trainer.id}
              className="w-full shadow-xl sm:col-span-4 flex flex-col items-center"
            >
              <div
                className="w-full flex items-center justify-center z-0"
                style={{
                  backgroundImage: `url(${redBg})`,
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={trainer.avatar}
                  alt="trainer Image"
                  className="w-52 h-72 overflow-hidden grayscale hover:grayscale-0 ease-in duration-150"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-3 bg-white text-black relative">
                <div
                  style={{
                    backgroundImage: `url(${shape})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-28 flex items-center justify-center absolute -top-5"
                >
                  <IoIosArrowUp className="ml-1 text-3xl" />
                </div>

                <div className="mt-8 flex flex-col text-center items-center justify-center gap-y-2 mb-10">
                  <h1 className="font-bold text-lg sm:text-xl">
                    {trainer.name}
                  </h1>
                  <p className="text-gray-500 tracking-wide">{trainer.type}</p>
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <Link to="">
                      <FaFacebookF />
                    </Link>
                    <Link to="">
                      <FaInstagram />
                    </Link>
                    <Link to="">
                      <FaTwitter />
                    </Link>
                    <Link to="">
                      <IoMdMail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GymTrainers;
