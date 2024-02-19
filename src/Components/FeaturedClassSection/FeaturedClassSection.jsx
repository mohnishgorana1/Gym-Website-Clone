import titleBg from "../../images/pricing/titlebg.svg";
import cycling from "../../images/classes/cycling.jpg";
import karate from "../../images/classes/karate.jpg";
import power from "../../images/classes/powerlifting.jpg";
import meditation from "../../images/classes/meditation.jpg";
import mma from "../../images/classes/mma.jpg";
import workout from "../../images/classes/workout.jpg";

function FeaturedClassSection() {
  const classesDetails = [
    {
      id: 1,
      name: "Cycling",
      time: "Wednesday 9:00am-10:00am",
      bgImage: cycling,
      logoWhite: "",
      logoRed: "",
    },
    {
      id: 2,
      name: "Karate",
      time: "Friday 9:00am-10:00am",
      bgImage: karate,
      logoWhite: "",
      logoRed: "",
    },
    {
      id: 3,
      name: "Power",
      time: "Wednesday 9:00am-10:00am",
      bgImage: power,
      logoWhite: "",
      logoRed: "",
    },
    {
      id: 4,
      name: "Meditation",
      time: "Wednesday 9:00am-10:00am",
      bgImage: meditation,
      logoWhite: "",
      logoRed: "",
    },
    {
      id: 5,
      name: "Martial Arts",
      time: "Wednesday 9:00am-10:00am",
      bgImage: mma,
      logoWhite: "",
      logoRed: "",
    },
    {
      id: 6,
      name: "Workout",
      time: "Wednesday 9:00am-10:00am",
      bgImage: workout,
      logoWhite: "",
      logoRed: "",
    },
  ];

  return (
    <div className="w-full px-12 py-8 sm:px-12 flex flex-col items-center justify-center gap-y-5">
      <div>
        <img src={titleBg} className="-z-10 w-60 sm:w-60" />
        <p className=" sm:w-64 ml-10 sm:ml-12 text-white text-sm relative z-10 font-bold -top-7">
          OUR FEATURED CLASS
        </p>
      </div>
      <h1 className="font-bold text-3xl sm:text-4xl text-center">
        We Are Offering Best Flexible Classes
      </h1>

      <div className="w-full h-auto mt-5 grid  sm:grid-cols-4 gap-6">
        {classesDetails.map((c) => {
          return (
            <section
              key={c.id}
              className={`h-[350px] w-full ${
                c.id === 1 || c.id === 6 ? "sm:col-span-2" : "sm:col-span-1"
              } relative group overflow-hidden `}
            >
              <div
                className="w-full h-full bg-cover bg-center relative transform transition-transform group-hover:scale-125 ease-in duration-300 grayscale hover:grayscale-0"
                style={{
                  backgroundImage: `url(${c.bgImage})`,
                }}
              ></div>
              <div className="flex flex-col gap-4 items-start absolute left-0 bottom-5 text-white">
                <h1 className="font-extrabold  text-4xl ml-5">{c.name}</h1>
                <span className="ml-5 w-auto bg-[#ff0335ff] px-5 py-1 ">
                  {c.time}
                </span>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedClassSection;
