import Footer from "../../Components/Footer/Footer";
import banner from "../../images/login/banner.jpg";
import img1 from "../../images/GalleryPage/1.jpg";
import img2 from "../../images/GalleryPage/2.jpg";
import img3 from "../../images/GalleryPage/3.jpg";
import img4 from "../../images/GalleryPage/4.jpg";
import img5 from "../../images/GalleryPage/5.jpg";
import img6 from "../../images/GalleryPage/6.jpg";
import img7 from "../../images/GalleryPage/7.jpg";
import img8 from "../../images/GalleryPage/8.jpg";
import img9 from "../../images/GalleryPage/9.jpg";
import img10 from "../../images/GalleryPage/10.jpg";
import img11 from "../../images/GalleryPage/11.jpg";
import img12 from "../../images/GalleryPage/12.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

function GalleryPage() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="relative flex flex-col items-center -z-10 sm:-top-5 ">
        <img src={banner} className="w-full h-24 sm:h-48" />
        <h1 className="text-center text-3xl absolute bottom-8 font-bold text-white">
          Gallery
        </h1>
      </div>

      <div className="w-full px-8 sm:px-16 py-16 sm:py-28 grid sm:grid-cols-3 gap-10">
        {images.map((img, i) => {
          return (
            <img key={i} src={img} alt="image" className="sm:col-span-1 w-full grayscale hover:grayscale-0 duration-200 ease-in-out transform transition-transform" />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default GalleryPage;
