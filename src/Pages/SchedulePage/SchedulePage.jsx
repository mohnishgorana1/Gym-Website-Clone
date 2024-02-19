import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import banner from "../../images/login/banner.jpg";
function SchedulePage() {
  const [scheduleDetails, setScheduleDetails] = useState([
    {
      day: "Monday",
      isActive: true,
      classes: [
        {
          name: " Fitness",
          time: "9:00am - 10:00am ",
          trainer: " David Vila",
        },
        {
          name: "Body Building ",
          time: "10:00pm - 11:00pm ",
          trainer: " John Weights",
        },
        {
          name: "Running ",
          time: "4:00pm - 5:00pm ",
          trainer: " Junifor Jonas",
        },
        {
          name: "Cycling ",
          time: "6:00pm - 7:00pm ",
          trainer: "Robert Louis ",
        },
      ],
    },
    {
      day: "Tuesday",
      isActive: false,
      classes: [
        {
          name: " Boxing",
          time: "9:00am - 10:00am ",
          trainer: " Mike Tyson",
        },
        {
          name: " Yoga",
          time: " 10:00pm - 11:00pm",
          trainer: "Mia Kha ",
        },
        {
          name: " Crossfit",
          time: "4:00pm - 5:00pm ",
          trainer: " Cristofer Columbo",
        },
      ],
    },
    {
      day: "Wednesday",
      isActive: false,
      classes: [
        {
          name: " Cycling",
          time: " 9:00am - 10:00am",
          trainer: "Mario Vreco ",
        },
        {
          name: " Body Building",
          time: "10:00pm - 11:00pm ",
          trainer: "John Weights ",
        },
        {
          name: " Fitness",
          time: " 4:00pm - 5:00pm",
          trainer: "Tom Rizzly ",
        },
        {
          name: "Running ",
          time: " 6:00pm - 7:00pm",
          trainer: " Michael Jonson",
        },
      ],
    },
    {
      day: "Thursday",
      isActive: false,
      classes: [
        {
          name: "Fitness ",
          time: "9:00am - 10:00am ",
          trainer: " David Vila",
        },
        {
          name: "Body Building ",
          time: "10:00pm - 11:00pm ",
          trainer: "John Weights ",
        },
        {
          name: " Running",
          time: " 4:00pm - 5:00pm",
          trainer: " Junifor Jonas",
        },
      ],
    },
    {
      day: "Friday",
      isActive: false,
      classes: [
        {
          name: "Crossfit ",
          time: " 9:00am - 10:00am",
          trainer: "Mike Mich ",
        },
        {
          name: "Karate ",
          time: " 10:00pm - 11:00pm",
          trainer: " John Jones",
        },
        {
          name: "Meditation ",
          time: "4:00pm - 5:00pm ",
          trainer: "Lara Croft ",
        },
        {
          name: "Workout ",
          time: " 6:00pm - 7:00pm",
          trainer: "Lary Wheels ",
        },
      ],
    },
    {
      day: "Saturday",
      isActive: false,
      classes: [
        {
          name: "Power Lifting ",
          time: "9:00am - 10:00am ",
          trainer: " David Laid",
        },
        {
          name: " Boxing",
          time: "10:00pm - 11:00pm ",
          trainer: "Tyson Fury ",
        },
        {
          name: " Yoga",
          time: " 4:00pm - 5:00pm",
          trainer: "Milica Tails ",
        },
      ],
    },
    {
      day: "Sunday",
      isActive: false,
      classes: [
        {
          name: "Fitness ",
          time: "9:00am - 10:00am ",
          trainer: " David Vila",
        },
        {
          name: "Body Building ",
          time: " 10:00pm - 11:00pm",
          trainer: " John Weights",
        },
        {
          name: "Running ",
          time: "4:00pm - 5:00pm ",
          trainer: " Junifor Jonas",
        },
        {
          name: "Cycling ",
          time: "6:00pm - 7:00pm",
          trainer: "Robert Louis",
        },
      ],
    },
  ]);
  const [displaySchedule, setDisplaySchedule] = useState(scheduleDetails[0]);

  const handleData = (index) => {
    const updateScheduleDetails = scheduleDetails.map((day, i) => ({
      ...day,
      isActive: i === index,
    }));

    setScheduleDetails(updateScheduleDetails);
    setDisplaySchedule(updateScheduleDetails[index]);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="relative flex flex-col items-center -z-10 sm:-top-5 ">
        <img src={banner} className="w-full h-24 sm:h-48" />
        <h1 className="text-center text-3xl absolute bottom-8 font-bold text-white">
          Schedule
        </h1>
      </div>

      <div className="w-full px-8 sm:px-16 py-16 sm:py-16 grid gap-10">
        <div className="grid gap-1 sm:grid-cols-7 sm:gap-8">
          {scheduleDetails.map((day, i) => {
            return (
              <button
                key={i}
                onClick={() => handleData(i)}
                className={`sm:grid-col-1 px-6 py-1  rounded-2xl border text-sm font-medium 
                        ${
                          day.isActive
                            ? `text-white bg-[#ff0335ff]`
                            : `text-black bg-white`
                        } hover:text-white hover:bg-[#ff0335ff] duration-150 ease-in-out`}
              >
                {day.day}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 ">
          {displaySchedule?.classes?.map((c, i) => {
            return (
              <div
                className="w-full bg-gray-100 grid gap-y-5 rounded-lg shadow-xl sm:grid-cols-10 px-5 py-5 hover:scale-x-105 duration-300"
                key={i}
              >
                <div className="sm:col-span-3">
                  <p className="text-gray-800">Class Name</p>
                  <h1 className="text-black font-bold text-lg">{c.name}</h1>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-gray-800">Time</p>
                  <h1 className="text-black font-medium text-lg">{c.time}</h1>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-gray-800">Trainer</p>
                  <h1 className="text-black font-medium text-lg">
                    {c.trainer}
                  </h1>
                </div>
                <button
                  className={`rounded-2xl px-3 py-1 bg-gray-700 text-white font-bold
                    hover:text-white hover:bg-[#ff0335ff] ease-in-out duration-200`}
                >
                  Join Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SchedulePage;
