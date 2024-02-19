import heroCardBgImage from "../../images/who-we-are/info-card-bg.jpg";
import progression from "../../images/who-we-are/progression.png";
import workout from "../../images/who-we-are/workout.png";
import nutritions from "../../images/who-we-are/nutritions.png";
import { useState } from "react";

function HeroCards() {
  const cardData = [
    {
      id: 1,
      logo: progression,
      heading: "Progression",
      cardBg: heroCardBgImage,
      message:
        "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    },
    {
      id: 2,
      logo: workout,
      heading: "WORKOUT",
      cardBg: heroCardBgImage,
      message:
        "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
    },
    {
      id: 3,
      logo: nutritions,
      heading: "NUTRITIONS",
      cardBg: heroCardBgImage,
      message:
        "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    },
  ];
  return (
    <div className="px-16 py-16 sm:px-12 flex flex-col sm:flex-row gap-8 items-center bg-gray-300 ">
      {cardData.map((card) => {
        return (
          <div
            key={card.id}
            className={`group bg-white flex flex-col items-center justify-center gap-5 px-6 py-10 rounded-tl-3xl rounded-br-3xl 
                        hover:shadow-lg hover:shadow-[#ff0335ff]
                        duration-150 ease-in-out overflow-hidden`}
          >
            <img src={card.logo} alt="logo" />
            <h1 className="font-bold text-xl tracking-wider">{card.heading}</h1>
            <p className="text-center">{card.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HeroCards;
