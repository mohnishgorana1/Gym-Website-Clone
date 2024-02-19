import AboutSection from "../../Components/AboutSection/AboutSection";
import Footer from "../../Components/Footer/Footer";
import banner from "../../images/login/banner.jpg";

function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="relative flex flex-col items-center -z-10 sm:-top-5 ">
        <img src={banner} className="w-full h-24 sm:h-48" />
        <h1 className="text-center text-3xl absolute bottom-8 font-bold text-white">
          About
        </h1>
      </div>
      <AboutSection />
      
      <Footer />
    </div>
  );
}

export default AboutPage;
