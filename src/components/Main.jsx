import Banner from "./Banner";
import banner from "../assets/banner.jpg";
import bannerimg from "../assets/bannerimg.jpg";
import kfc from "../assets/kfc.jpg";
import kfcbanner from "../assets/kfcbanner.jpg";

import "../styles/components/main.css";


const Main = () => {
  const slides = [banner, bannerimg, kfc, kfcbanner];
  return (
    <>
      <div className="bannerCrausal">
        <Banner autoSlide={true} >
          {slides.map((s, i) => (
            <img src={s} key={i}  />
          ))}
        </Banner>
      </div>
    </>
  );
};

export default Main;
