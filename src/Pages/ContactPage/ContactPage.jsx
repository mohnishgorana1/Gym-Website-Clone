import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import banner from "../../images/login/banner.jpg";

function ContactPage() {
  const classList = [
    "BodyBuilding",
    "Boxing",
    "running",
    "fitness",
    "yoga",
    "workout",
    "karate",
    "meditation",
    "cycling",
  ];
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    class: "",
    comment: "",
  });

  const handleInputs = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: [e.target.value],
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(userData);

    setUserData({
      fullName: "",
      email: "",
      class: "",
      comment: "",
    });
  };
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="relative flex flex-col items-center -z-10 sm:-top-5 ">
        <img src={banner} className="w-full h-24 sm:h-48" />
        <h1 className="text-center text-3xl absolute bottom-8 font-bold text-white">
          Contact Us
        </h1>
      </div>
      <div className="py-8 sm:py-8 px-12 sm:px-16 w-full grid sm:grid-cols-3 mb-12 sm:mb-16">
        <div className=" sm:col-span-2 bg-white text-black px-8 sm:px-16 py-8 sm:py-16 flex flex-col items-start gap-8">
          <h1 className="font-bold text-2xl sm:text-5xl">
            We are here for help you! To Shape Your Body.
          </h1>
          <p className="text-gray-400 text-lg text-justify">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="w-full">
              <div className="w-full mb-3">
                <h2 className="font-bold text-xl pb-2">New York City, USA</h2>
                <div className="w-1/3 h-1 border-b-4 border-b-red-500"></div>
              </div>
              <p className="text-gray-500">85 Briston Mint Street,</p>
              <p className="text-gray-500">London, E1 8LG, USA</p>
            </div>

            <div className="w-full">
              <div className="w-full mb-3">
                <h2 className="font-bold text-xl pb-2">Opening Hours</h2>
                <div className="w-1/3 h-1 border-b-4 border-b-red-500"></div>
              </div>
              <p className="text-gray-500">Mon to Fri: 7:30 am — 1:00 am</p>
              <p className="text-gray-500">Mon to Fri: 7:30 am — 1:00 am</p>
            </div>
            <div className="w-full">
              <div className="w-full mb-3">
                <h2 className="font-bold text-xl pb-2">Information</h2>
                <div className="w-1/3 h-1 border-b-4 border-b-red-500"></div>
              </div>
              <p className="text-gray-500">+800-123-4567</p>
              <p className="text-gray-500">gymat@gymail.com</p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-1 bg-gray-100 px-8 sm:px-16 py-8 sm:py-16 grid">
          <div className="w-full mb-3">
            <h2 className="font-bold text-xl sm:text-3xl pb-2">
              Leave Us Your Info
            </h2>
            <div className="w-[70%] h-1 border-b-4 border-b-red-500"></div>
          </div>
          <form onSubmit={handleForm} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={userData.fullName}
              className="w-full py-3 border px-4"
              onChange={handleInputs}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              className="w-full py-3 border px-4"
              onChange={handleInputs}
            />
            <select
              placeholder="Choose an Option"
              name="class"
              value={userData.class}
              onChange={handleInputs}
              className="w-full py-3 border px-4"
            >
              <option value="" disabled selected hidden>
                Choose an option
              </option>
              {classList.map((c, i) => {
                return <option key={i}>{c}</option>;
              })}
            </select>
            <textarea
              type="text"
              placeholder="Comment"
              name="comment"
              value={userData.comment}
              className="w-full py-3 border px-4"
              onChange={handleInputs}
            />

            <button
              type="submit"
              className="self-center px-7 py-3 bg-red-600 text-white border-2 border-red-600 hover:border-2 hover:border-white font-bold cursor-pointer"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
