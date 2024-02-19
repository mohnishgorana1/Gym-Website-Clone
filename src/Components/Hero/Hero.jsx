import heroImage from "../../images/hero/hero-img.jpg";
import titleBg from "../../images/pricing/titlebg.svg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundPosition: "center center",
      }}
      className="w-full overflow-hidden h-screen flex text-white"
    >
      <div className="w-[50%] pt-16  ml-[40%] sm:ml-[45%]  h-auto flex flex-col items-start  gap-10 relative">
        <div>
          <img src={titleBg} className="-ml-8 mb-1 sm:ml-5 -z-10 sm:w-64" />
          <p className="w-64 sm:ml-20 text-white text-xl relative z-10 font-medium -top-9">
            find you energy
          </p>
        </div>
        <h1 className="ml-5 sm:ml-10 text-[28px] sm:text-[60px] font-bold text-start">
          MAKE YOUR BODY <br />
          <span className="font-thin">FIT & PERFECT</span>
        </h1>

        <button className="self-end sm:self-start sm:ml-10 py-1 px-5 sm:py-3 sm:px-9 font-medium text-lg bg-white hover:bg-transparent hover:text-white text-[#ff0335ff] border border-[#ff0335ff] ease-in duration-150">
          <Link to="">Our Classes</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
