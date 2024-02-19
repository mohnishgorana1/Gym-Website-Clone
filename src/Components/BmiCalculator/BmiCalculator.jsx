import { useState } from "react";
import bmiHeroImage from "../../images/bmi/background.jpg";
import { Link } from "react-router-dom";
function BmiCalculator() {
  const [bmi, setBmi] = useState("");

  const [userData, setUserData] = useState({
    weight: "",
    height: "",
  });

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  function calculateBMI(e) {
    e.preventDefault();
    if (!userData.weight || !userData.height) {
      alert("Please Enter all Fields required for BMI Calculations");
    }
    const wt = Number(userData.weight);
    const ht = Number(userData.height);

    const result = Math.floor(wt / (ht / 100) ** 2);

    console.log(wt);
    console.log(ht);
    console.log(result);

    setBmi(result);

    setUserData({
      weight: "",
      height: "",
    });
  }
  return (
    <div
      className=" w-full h-auto px-8 py-16 sm:px-16 bg-center bg-cover"
      style={{
        backgroundImage: `url(${bmiHeroImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full sm:w-[55%]  flex flex-col items-start gap-8">
        <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-wider">
          Let's Calculate Your <span className="text-[#ff0335ff]">BMI</span>
        </h1>
        <p className="text-gray-400 text-xl font-thin">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <form
          onSubmit={calculateBMI}
          className="flex flex-col items-start gap-8"
        >
          <div className="flex flex-col  sm:flex-row items-start justify-between gap-5">
            <input
              type="text"
              name="weight"
              value={userData.weight}
              onChange={handleChange}
              placeholder="Weight (kg)"
              className="px-5 py-3 bg-transparent border text-white"
            />
            <input
              type="text"
              name="height"
              value={userData.height}
              onChange={handleChange}
              placeholder="Height (cm)"
              className="px-5 py-3 bg-transparent border text-white"
            />
          </div>

          <div className="text-white font-medium flex flex-col sm:flex-row items-start sm:gap-36">
            <h2 className="my-1">
              Your BMI is: <span className="text-[#ff0335ff]">{bmi}</span>
            </h2>
            <h2 className="my-1">
              Your Weight is:{" "}
              <span className="text-[#ff0335ff]">{userData.weight}</span>
            </h2>
          </div>

          <button
            type="submit"
            className="py-3 px-9 font-medium text-lg border border-[#404040ff] bg-[#404040ff] text-white hover:border hover:border-[#ff0335ff] hover:bg-transparent hover:text-[#ff0335ff] ease-in duration-150"
          >
            Calculate BMI
          </button>
        </form>
      </div>
    </div>
  );
}

export default BmiCalculator;
