import Logo from "../../images/logo/logo.svg";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-black border w-full px-12 py-12 sm:px-16 sm:py-16 text-white grid sm:grid-cols-4 items-center justify-center gap-8">
      <div className="sm:col-span-2 w-[80%] flex flex-col items-start justify-center gap-5  h-[350px] text-gray-200">
        <img src={Logo} alt="" />
        <p className="">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className="flex items-center gap-8">
          <Link
            to=""
            className="rounded-full p-3 bg-gray-100 text-gray-800 hover:bg-pink-600 hover:text-white ease-in-out duration-200"
          >
            <FaFacebookF />
          </Link>
          <Link
            to=""
            className="rounded-full p-3 bg-gray-100 text-gray-800 hover:bg-pink-600 hover:text-white ease-in-out duration-200"
          >
            <FaTwitter />
          </Link>
          <Link
            to=""
            className="rounded-full p-3 bg-gray-100 text-gray-800 hover:bg-pink-600 hover:text-white ease-in-out duration-200"
          >
            <FaPinterest />
          </Link>
          <Link
            to=""
            className="rounded-full p-3 bg-gray-100 text-gray-800 hover:bg-pink-600 hover:text-white ease-in-out duration-200"
          >
            <FaYoutube />
          </Link>
        </div>
        <p>
          Privacy Policy | © 2024 Gymate <br /> Design by RadiusTheme
        </p>
      </div>

      <div className="sm:col-span-1 w-full flex flex-col items-start justify-center gap-5  h-[350px]">
        <h1 className="font-bold text-3xl border-b-2 border-b-pink-500 pb-1">
          Our Classes
        </h1>
        <ul className="flex flex-col gap-y-5">
          <li className="font-semibold">Fitness Classes</li>
          <li className="font-semibold">Aerobics Classes</li>
          <li className="font-semibold">Power Yoga</li>
          <li className="font-semibold">Learn Machines</li>
          <li className="font-semibold">Full-body Strength</li>
        </ul>
      </div>

      <div className="sm:col-span-1 w-full flex flex-col items-start justify-center gap-5  h-[350px] ">
        <h1 className="font-bold text-3xl border-b-2 border-b-pink-500 pb-1">
          Working Hours
        </h1>
        <ul className="flex flex-col gap-y-5">
          <li className="font-semibold">Monday - Friday:</li>
          <li className="font-semibold text-gray-400">7:00am - 21:00pm</li>
          <li className="font-semibold">Saturday:</li>
          <li className="font-semibold text-gray-400">7:00am - 19:00pm</li>
          <li className="font-semibold">Sunday - Closed</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
